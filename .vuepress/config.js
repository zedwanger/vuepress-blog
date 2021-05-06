const themeConfig = require('./config/theme/')
module.exports = {
  title: "zed-blog",
  description: "王泽东的个人博客",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: themeConfig,
  // locales: {
    // '/': {
    //   lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    //   title: "ZED",
    //   description: '一款简洁而优雅的 vuepress 博客 & 文档 主题。'
    // },
    // '/en/': {
    //   lang: 'en-US',
    //   title: "vuepress-theme-reco",
    //   description: 'A simple and beautiful vuepress Blog & Doc theme.'
    // }
  // },
  markdown: {
    lineNumbers: true,
  },
};
