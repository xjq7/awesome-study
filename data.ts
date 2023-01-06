export interface Source {
  title: string;
  link?: string;
  desc?: string;
  children?: Source[];
}

const content: Source[] = [
  {
    title: '工具',
    children: [
      {
        title: 'betaqr',
        link: 'https://www.betaqr.com/udid',
        desc: '查看 ios uuid',
      },
      {
        title: 'jsoncn',
        link: 'https://www.json.cn/',
        desc: 'JSON 数据解析',
      },
      {
        title: 'dooccn',
        link: 'https://www.dooccn.com/',
        desc: '在线运行代码',
      },

      {
        title: 'linux-command',
        link: 'https://wangchujiang.com/linux-command/',
        desc: 'linux 命令搜索、解析',
      },
      {
        title: 'certbot',
        link: 'https://certbot.eff.org/',
        desc: '免费申请 https 证书',
      },
      {
        title: 'acme.sh',
        link: 'https://github.com/acmesh-official/acme.sh',
        desc: '管理 letsencrypt 证书的脚本工具',
      },
      {
        title: '墨滴',
        link: 'https://mdnice.com/',
        desc: '微信排版 markdown 编辑器',
      },
      {
        title: '在线 ast 语法树解析',
        link: 'https://astexplorer.net/',
      },
      {
        title: 'regex101',
        link: 'https://regex101.com/',
        desc: '可视化正则',
      },
      {
        title: 'jsoncrack',
        link: 'https://jsoncrack.com/',
        desc: '优雅的 JSON 数据可视化工具',
      },
      {
        title: 'regex-vis',
        link: 'https://regex-vis.com/',
        desc: '可视化正则',
      },
    ],
  },
  {
    title: 'awesome 系列',
    children: [
      {
        title: 'Awesome-GitHub-Repo',
        link: 'https://github.com/Wechat-ggGitHub/Awesome-GitHub-Repo',
        desc: 'GitHub 上高质量、有趣的开源项目',
      },
      {
        title: 'awesome-mysql',
        link: 'http://shlomi-noach.github.io/awesome-mysql/',
        desc: 'A curated list of awesome MySQL free and opensource software',
      },
      {
        title: 'awesome-mysql-cn',
        link: 'https://github.com/jobbole/awesome-mysql-cn',
        desc: 'awesome-mysql 中文版',
      },
      {
        title: 'awesome-guidelines',
        link: 'https://github.com/Kristories/awesome-guidelines',
        desc: '代码风格指南',
      },
      {
        title: 'free-programming-books',
        link: 'https://github.com/EbookFoundation/free-programming-books',
        desc: '各种语言的免费学习资源列表',
      },
      {
        title: 'awesome',
        link: 'https://github.com/sindresorhus/awesome',
        desc: 'Awesome lists about all kinds of interesting topics',
      },
    ],
  },
  {
    title: '周刊',
    children: [
      {
        title: '前端精读周刊',
        link: 'https://github.com/ascoders/weekly',
        desc: '',
      },
      {
        title: '开发者头条',
        link: 'https://wangchujiang.com/github-rank/toutiao-7.html',
        desc: '',
      },
      {
        title: '前端早报',
        link: 'https://github.com/wubaiqing/zaobao',
        desc: '',
      },
      {
        title: 'TNT-Weekly',
        link: 'https://github.com/tnfe/TNT-Weekly',
        desc: '前端周刊',
      },
      {
        title: 'WecTeam 周刊',
        link: 'https://github.com/wecteam/weekly',
        desc: '京东京喜前端技术团队周刊',
      },
      {
        title: '每日时报',
        link: 'https://wubaiqing.github.io/zaobao/2022/04/29.html',
        desc: '',
      },
    ],
  },
  {
    title: '技术自媒体',
    children: [
      {
        title: '讶羽',
        link: 'https://github.com/mqyqingfeng/Blog',
        desc: 'JavaScript 深入系列、JavaScript 专题系列、ES6 系列、React 系列',
      },
      {
        title: '木易杨',
        link: 'https://muyiy.cn',
        desc: '高级前端进阶',
      },
      {
        title: '五月君',
        link: 'https://www.nodejs.red/#/README',
        desc: 'nodejs技术栈',
      },
      {
        title: '跟煎鱼学 Go',
        link: 'https://eddycjy.gitbook.io/golang',
        desc: '',
      },
    ],
  },
  {
    title: '手册',
    children: [
      {
        title: 'caniuse',
        link: 'https://caniuse.com',
        desc: '浏览器对于前端技术新特性的支持查询',
      },
      {
        title: '正则表达式手册',
        link: 'https://tool.oschina.net/uploads/apidocs/jquery/regexp.html',
        desc: '快捷查阅正则表达式',
      },
      {
        title: 'devdocs',
        link: 'https://devdocs.io/',
        desc: '开发者文档手册',
      },
      {
        title: 'overapi',
        link: 'https://overapi.com/',
        desc: '开发者API查询手册',
      },
      {
        title: '网道',
        link: 'https://wangdoc.com/',
        desc: '开发者文档手册',
      },
    ],
  },
  {
    title: '文档中心',
    children: [
      {
        title: 'Typescript 中文文档',
        link: 'https://www.tslang.cn/index.html',
        desc: '',
      },
      {
        title: 'pnpm',
        link: 'https://www.pnpm.cn/',
        desc: 'pnpm 官网(速度快、节省磁盘空间的软件包管理器)',
      },
      {
        title: 'prettier',
        link: 'https://prettier.io/',
        desc: 'prettier 官网(代码格式化)',
      },
      {
        title: 'vite',
        link: 'https://vitejs.dev/',
        desc: '构建工具',
      },
      {
        title: 'Go dev doc',
        link: 'https://go.dev/',
        desc: 'Go 语言文档',
      },
      {
        title: 'Gitlab',
        link: 'https://docs.gitlab.com/',
        desc: 'Gitlab 文档',
      },
      {
        title: 'Markdown 官方教程',
        link: 'https://markdown.com.cn/',
        desc: 'Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档',
      },
    ],
  },
  {
    title: '学习指南',
    children: [
      {
        title: 'Underscore Analysis',
        link: 'https://github.com/lessfish/underscore-analysis',
        desc: 'Underscore源码解读',
      },
      {
        title: '30-seconds-of-code',
        link: 'https://github.com/30-seconds/30-seconds-of-code',
        desc: '简洁有用的JavaScript代码片段',
      },
      {
        title: 'javascript-questions',
        link: 'https://github.com/lydiahallie/javascript-questions/blob/master/zh-CN/README-zh_CN.md',
        desc: '',
      },
      {
        title: 'utility library for JavaScript',
        link: 'https://github.com/liriliri/licia',
        desc: '实用代码片段集合',
      },
      {
        title: 'HelloGitHub',
        link: 'https://github.com/521xueweihan/HelloGitHub',
        desc: 'HelloGitHub 分享 GitHub 上有趣、入门级的开源项目',
      },
      {
        title: 'airbnb 前端指南',
        link: 'https://github.com/airbnb/javascript',
        desc: '',
      },
      {
        title: 'es6 入门教程',
        link: 'https://es6.ruanyifeng.com',
        desc: '',
      },
      {
        title: 'oi-wiki',
        link: 'https://oi-wiki.org',
        desc: '编程竞赛知识整合站点',
      },
      {
        title: 'regexone',
        link: 'https://regexone.com',
        desc: '正则表达式学习',
      },
      {
        title: 'CS自学指南',
        link: 'https://csdiy.wiki/',
        desc: '计算机的自学指南',
      },
      {
        title: 'patterns',
        link: 'https://www.patterns.dev/',
        desc: '关于设计模式、组件模式的一本书',
      },
      {
        title: 'typescript deep dive',
        link: 'https://basarat.gitbook.io/typescript/',
        desc: 'typescript book',
      },
      {
        title: 'typescript deep dive chinese',
        link: 'https://jkchao.github.io/typescript-book-chinese/',
        desc: 'typescript deep dive 翻译版',
      },
      {
        title: 'developer-roadmap',
        link: 'https://github.com/kamranahmedse/developer-roadmap',
        desc: 'Roadmap to becoming a developer in 2022',
      },
      {
        title: 'GitHub中文排行榜',
        link: 'https://github.com/GrowingGit/GitHub-Chinese-Top-Charts',
        desc: '帮助你发现优秀中文项目，可以无语言障碍地、更高效地吸收优秀经验成果',
      },
      {
        title: 'mysql-tutorial',
        link: 'https://github.com/jaywcjlove/mysql-tutorial',
        desc: 'MySQL入门教程（MySQL tutorial book）',
      },
    ],
  },
  {
    title: '博客',
    children: [
      {
        title: 'antfu',
        link: 'https://antfu.me/posts',
        desc: '',
      },
    ],
  },
];
export default content;
