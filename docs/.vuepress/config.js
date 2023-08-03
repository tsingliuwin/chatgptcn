import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '数据会说话',
  description: '记录对数据的所思、所想',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      }
    ],
    sidebar: 'auto'
    // ,
    // sidebar: [
    //     {
    //         text: 'hello',
    //         link: '/hello/'
    //     },
    //     {
    //         text: '你好',
    //         link: '/bar/about/'
    //     }
    // ]
  })
})
  
