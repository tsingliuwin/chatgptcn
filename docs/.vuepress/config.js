import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ChatGPT中文文档',
  description: 'ChatGPT, LLM, 大模型, 大语言模型',
  head: [
    ['meta', {name: 'google-site-verification', content: 'mbC3Y2iTQfTAjqFGZb_eK116Rol1RmRMJTpY8Y8FN5s'}],
    ['meta', {name: 'baidu-site-verification', content: 'codeva-x6aGkEgMlp'}]
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-DFSMJB0RMS'
    })
  ],
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      }
    ],
    sidebar: [
        {
            text: 'ChatGPT',
            link: '/chatgpt/'
        },
        {
            text: 'OpenAI',
            link: '/openai/'
        },
        {
          text: '官方文档',
          children: [
            {
              text: '介绍',
              link: '/documents/introduction/'
            },
            {
              text: '体验',
              link: '/documents/knows/'
            },
            {
              text: '快速开始',
              link: '/documents/quickstart/'
            }
          ]
        },
        {
          text: 'System prompt合集',
          children: [
            {
              text: '中文合集',
              link: '/prompt/system_prompt_cn/'
            },
            {
              text: '英文合集',
              link: '/prompt/system_prompt_en/'
            },
            {
              text: '特殊风格合集',
              link: '/prompt/system_prompt_other/'
            }
          ]
        },
        {
          text: 'Hugging Face',
          children: [
            {
              text: '介绍',
              link: '/huggingface/introduction/'
            }
          ]
        },
        {
          text: '开源大模型',
          children: [
            {
              text: 'ChatGLM2-6B',
              link: '/opensource/ChatGLM-6B/'
            }
          ]
        },
        {
          text: '中文测试集',
          link: '/testset/'
        },
        {
          text: '其它GPT',
          children: [
            {
              text: '文心一言',
              link: '/other/wenxin/'
            },
            {
              text: '通义千问',
              link: '/other/qianwen/'
            },
            {
              text: '天工助手',
              link: '/other/tiangong/'
            },
            {
              text: '讯飞星火',
              link: '/other/xinghuo/'
            }
          ]
        },
        {
          text: '应用',
          children: [
            {
              text: '5movies',
              link: '/application/5movies/'
            }
          ]
        },
        {
          text: '转载',
          children: [
            {
              text: 'ChatGPT基础科普',
              link: '/transport/basic/'
            },
            {
              text: '陆奇：我的大模型世界观',
              link: '/transport/my_llm/'
            }
          ]
        },
        {
          text: '自然语言处理',
          children: [
            {
              text: 'HanLP',
              link: '/nlp/hanlp/'
            }
          ]
        },
        {
          text: '关于',
          link: '/about/'
        },
        {
          text: '公告',
          link: '/notice/'
        }
    ]
  })
})
  
