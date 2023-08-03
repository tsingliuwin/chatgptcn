import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ChatGPT中文文档',
  description: 'ChatGPT, LLM, 大模型, 大语言模型',
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
  
