export interface Source {
  title: string;
  link?: string;
  desc?: string;
  children?: Source[];
}

const content: Source[] = [
  {
    title: '网站',
    children: [
      { title: 'v2ex', link: 'https://www.v2ex.com', desc: '论坛' },
      { title: '掘金', link: 'https://juejin.im' },
      { title: '鱼塘热榜', link: 'https://mo.fish', desc: '摸鱼网站' },
      { title: 'dev.to', link: 'https://mo.fish', desc: '社区' },
      { title: 'digitalocean', link: 'https://digitalocean.com', desc: '教程' },
      {
        title: 'stackoverflow',
        link: 'https://stackoverflow.com',
        desc: '问答社区',
      },
      { title: 'medium', link: 'https://medium.com', desc: '博客' },
      { title: 'acwing', link: 'https://www.acwing.com', desc: '算法编程' },
      {
        title: 'Go 语言中文网',
        link: 'https://studygolang.com/',
        desc: '',
      },
      {
        title: 'C 语言中文网',
        link: 'http://c.biancheng.net/',
        desc: 'C、CPP 语言教程',
      },
    ],
  },
  {
    title: '资源',
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
        title: 'color hunt',
        link: 'https://colorhunt.co/',
        desc: '',
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
      {
        title: 'getemoji',
        link: 'https://getemoji.com/',
        desc: 'emoji表情',
      },
      {
        title: 'emojicopy',
        link: 'https://www.emojicopy.com/',
        desc: 'emoji表情',
      },
    ],
  },
  {
    title: '工具箱',
    children: [
      {
        title: 'atoolbox',
        link: 'http://www.atoolbox.net',
        desc: '在线工具箱',
      },
      {
        title: 'tool.lu',
        link: 'https://tool.lu/',
        desc: '在线工具箱',
      },
      {
        title: 'BFW',
        link: 'https://tool.bfw.wiki/',
        desc: '程序员在线工具箱',
      },
      {
        title: '67tool',
        link: 'https://www.67tool.com/',
        desc: '即时工具箱',
      },
      {
        title: '发现导航',
        link: 'https://www.nav3.cn/',
        desc: '导航站点',
      },
    ],
  },
  {
    title: '工具',
    children: [
      { title: 'tinypng', link: 'https://tinypng.com/', desc: '图片压缩' },
      {
        title: 'squoosh',
        link: 'https://squoosh.app/',
        desc: '图片压缩',
      },
      {
        title: 'nipponcolors',
        link: 'https://www.iloveimg.com/zh-cn',
        desc: '图片编辑工具',
      },
      {
        title: 'compresss',
        link: 'https://www.compresss.com/',
        desc: '文件压缩',
      },
      {
        title: 'onlineimagetool',
        link: 'https://www.onlineimagetool.com/zh/',
        desc: '文件压缩',
      },
      {
        title: 'bearaudiotool',
        link: 'https://www.bearaudiotool.com/zh',
        desc: '音频编辑',
      },
      {
        title: 'jinaconvert',
        link: 'https://jinaconvert.com/cn/',
        desc: '图片格式转换',
      },
      {
        title: 'betaqr',
        link: 'https://www.betaqr.com/udid',
        desc: '查看 ios uuid',
      },
      {
        title: 'onlineconvertfree',
        link: 'https://onlineconvertfree.com/zh/',
        desc: '文件格式互转',
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
    ],
  },
  {
    title: '电子书',
    children: [
      { title: '知识库', link: 'https://book.zhishikoo.com', desc: '' },
      {
        title: '书行天下',
        link: 'https://www.sxpdf.com',
        desc: '',
      },
      {
        title: '快吧',
        link: 'http://www.fast8.com',
        desc: '',
      },
      {
        title: '我爱电子书',
        link: 'https://www.52doc.com',
        desc: '',
      },
    ],
  },
  {
    title: 'awesome 系列',
    children: [
      {
        title: 'awesome-bookmarks',
        link: 'https://panjiachen.github.io/awesome-bookmarks',
        desc: '花裤衩的个人收藏夹',
      },
      {
        title: 'awesome-react-native',
        link: 'https://www.awesome-react-native.com',
        desc: '',
      },
      {
        title: 'awesome-go',
        link: 'https://awesome-go.com/',
        desc: '',
      },
      {
        title: 'awesome-front-end',
        link: 'https://github.com/helloqingfeng/Awsome-Front-End-learning-resource',
        desc: 'GitHub最全的前端资源汇总仓库（包括前端学习、开发资源、求职面试等）',
      },
      {
        title: 'CS-Awesome-Courses',
        link: 'https://github.com/jackwener/CS-Awesome-Courses',
        desc: '计算机的优秀课程',
      },
      {
        title: 'Awesome-GitHub-Repo',
        link: 'https://github.com/Wechat-ggGitHub/Awesome-GitHub-Repo',
        desc: 'GitHub 上高质量、有趣的开源项目',
      },
      {
        title: 'awesome-vue',
        link: 'https://github.com/vuejs/awesome-vue',
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
    ],
  },
];
export default content;
