export interface Source {
  title: string;
  link?: string;
  desc?: string;
  children?: Source[];
}

const content: Source[] = [
  {
    title: 'site',
    children: [
      { title: 'v2ex', link: 'https://www.v2ex.com', desc: '论坛' },
      { title: '掘金', link: 'https://juejin.im' },
      { title: 'mo.fish', link: 'https://mo.fish', desc: '摸鱼网站' },
      { title: 'dev.to', link: 'https://mo.fish', desc: '社区' },
      { title: 'digitalocean', link: 'https://digitalocean.com', desc: '教程' },
      {
        title: 'stackoverflow',
        link: 'https://stackoverflow.com',
        desc: '问答社区',
      },
      { title: 'medium', link: 'https://medium.com', desc: '博客' },
      { title: 'acwing', link: 'https://www.acwing.com', desc: '算法编程' },
    ],
  },
  {
    title: 'source',
    children: [
      { title: 'wallhaven', link: 'https://wallhaven.cc', desc: '壁纸' },
      {
        title: 'collectui',
        link: 'http://collectui.com/designs',
        desc: 'UI 设计',
      },
      {
        title: 'nipponcolors',
        link: 'https://nipponcolors.com',
        desc: '日本色',
      },
      {
        title: 'zhongguose',
        link: 'http://zhongguose.com',
        desc: '中国色',
      },
      {
        title: 'fontspace',
        link: 'https://www.fontspace.com',
        desc: '免费字体',
      },
      {
        title: 'pixabay',
        link: 'https://pixabay.com/zh/',
        desc: '高清图片素材库',
      },
    ],
  },
];
export default content;
