import { program } from 'commander';
import Axios from 'axios';
import * as htmlparser2 from 'htmlparser2';
import nav from '../public/nav.json';
import { Element, Text } from 'domhandler';
import fs from 'fs/promises';
import inquirer from 'inquirer';
import prettier, { Options } from 'prettier';
import prettierOptions from '../.prettierrc.json';
import ora from 'ora';

function request(url: string) {
  return Axios.get(url);
}

interface NetInfo {
  title: string;
  description: string;
  logo: string;
  href: string;
}

async function parseFromUrl(url: string): Promise<NetInfo> {
  let title = '',
    description = '',
    logo = '',
    keywords = '',
    href = url;
  const res = await request(url);
  const dom = htmlparser2.parseDocument(res.data);

  const htmlTag = dom.children.find((o) => {
    const name = (o as Element).name;
    return name === 'html';
  });

  if (htmlTag) {
    const headTag = (htmlTag as Element).children.find((o) => {
      const name = (o as Element).name;
      return name === 'head';
    });

    if (headTag) {
      [title, description, logo, keywords] = (headTag as Element).children.reduce(
        (acc, o) => {
          const { name, attribs } = o as Element;
          if (name === 'meta' && !acc[1]) {
            const { name, content } = attribs;
            if (name === 'description') {
              acc[1] = content;
            }
          }

          if (name === 'meta' && !acc[3]) {
            const { name, content } = attribs;
            if (name === 'keywords') {
              acc[3] = content;
            }
          }

          if (name === 'title' && !acc[0]) {
            let text = (o as Element).children.reduce((acc, o) => {
              return acc + (o as Text).data;
            }, '');

            if (/https:\/\/github.com/g.test(url)) {
              text = text.match(/(?<=:).*/g)?.[0] || text;
            }
            acc[0] = text.trim();
          }

          if (name === 'meta' && !acc[2]) {
            const { itemprop, content } = attribs;
            if (itemprop === 'image') {
              acc[2] = content;
            }
          }
          if (name === 'link' && !acc[2]) {
            let { rel, href } = attribs;
            if (rel === 'icon' || rel === 'shortcut icon') {
              if (!/https?:\/\//g.test(href)) href = url + href;
              acc[2] = href;
            }
          }

          return acc;
        },
        ['', '', '', '']
      );
    }
  }

  if (!description) description = keywords;

  return {
    title,
    description,
    logo,
    href,
  };
}

program.option('-u, --url <url>').action(async (params) => {
  const { url } = params;
  let spinner: any;
  try {
    let spinner = ora('抓取网页内容...').start();
    const { title, description, logo, href } = await parseFromUrl(url);
    spinner.stop();
    console.log('title:', title);
    console.log('description:', description);
    console.log('logo:', logo);
    console.log('href:', href);

    const ct1 = nav.map((o) => o.category);

    const { c1, c2 } = await inquirer.prompt([
      {
        type: 'list',
        name: 'c1',
        message: '大分类?',
        choices: ct1,
      },
      {
        type: 'list',
        name: 'c2',
        message: '小分类?',
        choices: ({ c1 }) => {
          const c1s = nav.find((o) => {
            return o.category === c1;
          });
          return c1s?.children.map((o) => o.classify);
        },
      },
    ]);

    nav.forEach((o) => {
      if (o.category === c1) {
        o.children.forEach((o) => {
          if (o.classify === c2) {
            o.sites.push({
              name: title,
              logo,
              desc: description,
              href,
            });
          }
        });
      }
    });

    await fs.writeFile(
      'public/nav.json',
      prettier.format(JSON.stringify(nav), { ...prettierOptions, parser: 'json' } as Options),
      'utf8'
    );

    console.log('解析成功!');
  } catch (error: any) {
    console.log('解析出错:', error.message);
  } finally {
    spinner && spinner.stop();
  }
});

program.parse();
