import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { sitemapPlugin } from "vuepress-plugin-sitemap2"

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ChatGPT中文文档',
  description: 'ChatGPT, LLM, 大模型, 大语言模型, ChatGPT4.0, ChatGPT3.5, ChatGPT中文网, ChatGPT中文版',
  head: [
    ['meta', {name: 'google-site-verification', content: 'mbC3Y2iTQfTAjqFGZb_eK116Rol1RmRMJTpY8Y8FN5s'}]
    // <meta name="sogou_site_verification" content="m8BWd63O2a" />
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-DFSMJB0RMS'
    }),
    sitemapPlugin({
      hostname: 'http://chatgptcn.eshop88.cn'
    })
  ],
  theme: defaultTheme({
    lastUpdated: false,
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'ChatGPT',
        link: '/chatgpt/',
      },
      {
        text: '大数据商业分析',
        link: 'https://data.eshop88.cn',
      },
      {
        text: 'Sea Tunnel',
        link: 'http://seatunnel.eshop88.cn'
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
              text: 'ChatGPT为什么拥有记忆力？',
              link: '/documents/whymemory/'
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
          text: '问答专区',
          children: [
            {
              text: 'chatgpt在国内可以访问吗？',
              link: '/QA/canvisit/'
            },
            {
              text: '中文版ChatGPT',
              link: '/QA/chatgpt_chinese/'
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
  
