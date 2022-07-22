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
    ],
  },
];
export default content;
