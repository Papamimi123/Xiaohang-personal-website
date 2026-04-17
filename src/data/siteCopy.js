export const siteCopy = {
  en: {
    common: {
      backToAbout: 'Back to About',
      view: 'View ->',
      project: 'Project',
      changeLanguage: 'Language',
      socialLinks: 'Social links',
      socialDock: 'Social dock'
    },
    selector: {
      englishTitle: 'English',
      englishDescription: 'welcome mi amores',
      mandarinTitle: '中文',
      mandarinDescription: '欢迎光临家人们'
    },
    home: {
      name: 'Xiaohang Chu',
      adjective: 'Adj.',
      tagline: 'chill guy, tech nerd, hot nerd wannabe',
      cta: 'See more of him'
    },
    about: {
      intro: 'Meet',
      rotatingTexts: ['Work Chu', 'Vibecoder Chu', 'Gym Chu', 'ChillGuy Chu']
    },
    chroma: {
      work: {
        title: 'Working Chu',
        subtitle: 'AI Engineer, Data guy',
        handle: '@AI-Chu'
      },
      vibe: {
        title: 'Vibecoder Chu',
        subtitle: 'Vibecoder',
        handle: '@Vibinglord0821'
      },
      gym: {
        title: 'Gym Chu',
        subtitle: 'Gym',
        handle: '@Gym Chu'
      },
      chill: {
        title: 'Chilling Chu',
        subtitle: 'Professional Chill Guy',
        handle: '@chilling-chu'
      }
    },
    work: {
      roles: ['AI Engineer', 'Data Analyst'],
      projects: [
        {
          title: 'Pharmacy Solution Consulting',
          branch: 'Optum Insight',
          summary:
            'Creating algorithms for pharmacy solutions to help reduce healthcare costs based on patient demographics, location, and drug history.',
          stack: ['Analytics', 'Data Visualization', 'Python']
        },
        {
          title: 'Query Journey UI Design',
          branch: 'Optum AI',
          summary:
            'Developing features for the Query Journey system that match user-entered symptoms to the most relevant healthcare providers. Also building and refining the UI to display scoring and coding details, while improving search for provider discovery.',
          stack: ['Frontend', 'Streamlit', 'Bokeh', 'Data Visualization']
        },
        {
          title: 'GenAI Ground Truth Framework',
          branch: 'Optum AI',
          summary:
            'Building a GenAI-powered evaluation pipeline that generates top-predicted medical specialties as proxy truth labels to measure model accuracy. Designing and implementing the full framework from result generation to similarity-based comparison with methods such as cosine similarity.',
          stack: ['GenAI', 'Data Engineering']
        },
        {
          title: 'Vector Search',
          branch: 'Optum AI',
          summary:
            'Building a UMAP-based dimensionality reduction model to project 2304-dimensional provider and query embeddings into 2D for visualization. I implemented an interactive scatterplot with FastAPI and Bokeh and integrated it into the provider search webpage for model exploration and debugging.',
          stack: ['Modeling', 'Data Visualization', 'Full Stack']
        },
        {
          title: 'Responsible Use of AI',
          branch: 'Optum AI',
          summary:
            'Building AI models to automatically extract responsible AI rules from documentation and policy text. Collaborating with the AzureML team to identify the correct rule for each scenario using our detection model outputs.',
          stack: ['AzureML', 'AI', 'Data Governance']
        }
      ]
    },
    vibecode: {
      hint: 'pause on hover, click to view',
      role: 'Vibecoder',
      cards: [
        {
          eyebrow: 'Personal Website',
          title: 'xiaohangchu.com',
          description:
            'Built with React, Vite, Tailwind, and a bunch of scroll animations. The whole thing is a vibe.',
          tags: ['React', 'Vite', 'Tailwind', 'FastAPI'],
          href: 'https://www.xiaohangchu.com'
        },
        {
          eyebrow: 'Prediction Tool',
          title: 'Option Pricing Prediction',
          description:
            'Option pricing tools based on the Black-Scholes model and Monte Carlo simulation. You input stock information, I output a prediction.',
          tags: ['Python', 'Modeling', 'Finance'],
          href: 'https://github.com/xiaohangchu'
        },
        {
          eyebrow: 'Data',
          title: 'Factory Management Tools',
          description:
            'Built a tool to help factory managers input operational data and analyze it quickly.',
          tags: ['Python', 'Management'],
          href: 'https://github.com/xiaohangchu'
        }
      ]
    },
    gym: {
      description:
        'Competed in Mens Physique twice and worked as a personal trainer for 2 years, helping bring health to people all over the world.',
      tags: ['Gym', 'Personal Trainer', 'Healthy Lifestyle'],
      hint: 'Drag to reorder · Tap on mobile'
    },
    chill: {
      title: 'Chilling Chu',
      hint: 'Hover to aim · click to flip.',
      flipCta: 'click to flip',
      vibes: [
        {
          label: 'Music',
          description: 'Playlists, artists, and sounds that hit different.',
          backItems: [
            'EDM EDM EDM EDM EDM - Driving',
            'Metro Boomin - Drinking',
            'RnB - Chilling',
            'Ryuchi Sakamoto - Meditating'
          ],
          backLabel: 'When you see me in my airpods'
        },
        {
          label: 'Food',
          description: 'When you come to my house, I will serve you.',
          backItems: ['Steak', 'Sushi', 'Homemade Pizza'],
          backLabel: "Can't say no to"
        },
        {
          label: 'Travel',
          description: 'Places visited, places on the list, places in memory.',
          backItems: [
            { city: 'Hokkaido', code: 'jp' },
            { city: 'Beijing', code: 'cn' },
            { city: 'Shanghai', code: 'cn' },
            { city: 'NYC', code: 'us' },
            { city: 'Paris (next)', code: 'fr' }
          ],
          backLabel: 'You have seen me at'
        },
        {
          label: 'Video Games',
          description: 'Play with me on these.',
          backItems: [
            'Apex Legends - Master',
            'League of Legends - Aram King',
            'Valorant - Please carry me',
            'Touching grass - Failed'
          ],
          backLabel: 'Current loadout'
        }
      ]
    },
    reflectiveCard: {
      secureAccess: 'SECURE ACCESS',
      logoAlt: 'UnitedHealth Group logo',
      name: 'Xiaohang Chu',
      role: 'AI Engineer',
      contactInfo: 'Contact Info'
    },
    socialTitles: {
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      douyin: 'Douyin'
    }
  },
  zh: {
    common: {
      backToAbout: '返回 About',
      view: '查看 ->',
      project: '项目',
      changeLanguage: '语言',
      socialLinks: '社交链接',
      socialDock: '社交工具栏'
    },
    selector: {
      englishTitle: 'English',
      englishDescription: 'welcome mi amores',
      mandarinTitle: '中文',
      mandarinDescription: '欢迎光临家人们'
    },
    home: {
      name: '初晓航',
      adjective: '形容词',
      tagline: '放松生活，性感技术宅预备役',
      cta: '看看更多的他'
    },
    about: {
      intro: '认识一下',
      rotatingTexts: ['工作中的阿初', '随心代码的阿初', '健身阿初', '放松生活的阿初']
    },
    chroma: {
      work: {
        title: '工作中的阿初',
        subtitle: 'AI 工程师，数据男',
        handle: '@AI-Chu'
      },
      vibe: {
        title: '写代码的阿初',
        subtitle: '氛围感程序员',
        handle: '@Vibinglord0821'
      },
      gym: {
        title: '健身阿初',
        subtitle: '健身',
        handle: '@Gym Chu'
      },
      chill: {
        title: '放松生活的阿初',
        subtitle: '专业放松生活哲学家',
        handle: '@chilling-chu'
      }
    },
    work: {
      roles: ['AI 工程师', '数据分析师'],
      projects: [
        {
          title: '药房解决方案咨询',
          branch: 'Optum Insight',
          summary:
            '开发药房解决方案算法，结合患者画像、地理位置和用药历史等因素，帮助降低医疗成本。',
          stack: ['分析', '数据可视化', 'Python']
        },
        {
          title: 'Query Journey 界面设计',
          branch: 'Optum AI',
          summary:
            '为 Query Journey 系统开发功能，将用户输入的症状匹配到最合适的医疗服务提供者。同时设计和优化前端界面，用来展示评分和编码细节，并完善搜索功能来提升医生发现效率。',
          stack: ['前端', 'Streamlit', 'Bokeh', '数据可视化']
        },
        {
          title: 'GenAI Ground Truth 框架',
          branch: 'Optum AI',
          summary:
            '构建一个由 GenAI 驱动的评估流水线，生成最可能的医学专科作为代理真值标签，用来衡量模型准确率。负责从结果生成到基于相似度的比较框架设计与实现，包括余弦相似度等方法。',
          stack: ['GenAI', '数据工程']
        },
        {
          title: '向量检索',
          branch: 'Optum AI',
          summary:
            '构建基于 UMAP 的降维模型，将 2304 维的 provider 和 query embedding 投影到二维空间中做可视化。我使用 FastAPI 和 Bokeh 实现交互式散点图，并集成到 provider search 网页中用于模型探索和调试。',
          stack: ['建模', '数据可视化', '全栈']
        },
        {
          title: 'AI 负责任使用',
          branch: 'Optum AI',
          summary:
            '构建 AI 模型，自动从文档和政策文本中提取 responsible AI 规则，并与 AzureML 团队合作，基于检测模型输出为不同场景识别最合适的规则。',
          stack: ['AzureML', 'AI', '数据治理']
        }
      ]
    },
    vibecode: {
      hint: '悬停暂停，点击查看',
      role: '程序员',
      cards: [
        {
          eyebrow: '个人网站',
          title: 'xiaohangchu.com',
          description: '使用 React、Vite、Tailwind 以及一堆滚动动画搭建，整个网站主打一个 vibe。',
          tags: ['React', 'Vite', 'Tailwind', 'FastAPI'],
          href: 'https://www.xiaohangchu.com'
        },
        {
          eyebrow: '预测工具',
          title: '期权定价预测',
          description: '基于 Black-Scholes 模型和 Monte Carlo simulation 的期权定价工具。你输入股票信息，我输出预测。',
          tags: ['Python', '建模', '金融'],
          href: 'https://github.com/xiaohangchu'
        },
        {
          eyebrow: '数据工具',
          title: '工厂管理工具',
          description: '做了一个工具，帮助工厂管理者录入运营数据并快速完成分析。',
          tags: ['Python', '管理'],
          href: 'https://github.com/xiaohangchu'
        }
      ]
    },
    gym: {
      description: '参加过两次 Mens Physique 比赛，也做过 2 年私教，希望把健康带给更多人。',
      tags: ['健身', '私人教练', '健康生活'],
      hint: '拖动可重新排序 · 手机端点击切换'
    },
    chill: {
      title: '放松生活的阿初',
      hint: '悬停瞄准 · 点击翻面。',
      flipCta: '点击翻面',
      vibes: [
        {
          label: '音乐',
          description: '那些一听就有感觉的歌单、歌手和声音。',
          backItems: [
            'EDM EDM EDM EDM EDM - 开车',
            'Metro Boomin - 喝酒',
            'RnB - 放空',
            '坂本龙一 - 冥想'
          ],
          backLabel: '当你看到我戴着耳机时'
        },
        {
          label: '美食',
          description: '你来我家，我会给你做这些！',
          backItems: ['牛排', '寿司', '自制披萨'],
          backLabel: '完全无法拒绝'
        },
        {
          label: '旅行',
          description: '去过的地方、想去的地方、留在记忆里的地方。',
          backItems: [
            { city: '北海道', code: 'jp' },
            { city: '北京', code: 'cn' },
            { city: '上海', code: 'cn' },
            { city: '纽约', code: 'us' },
            { city: '巴黎（下一站）', code: 'fr' }
          ],
          backLabel: '你可能在这些地方见过我'
        },
        {
          label: '电子游戏',
          description: '这些游戏都可以来找我一起玩。',
          backItems: [
            'Apex Legends - 大师',
            'League of Legends - 极地大乱斗之王',
            'Valorant - 求带',
            '进行户外活动 - 失败'
          ],
          backLabel: '当前装备栏'
        }
      ]
    },
    reflectiveCard: {
      secureAccess: '安全访问',
      logoAlt: 'UnitedHealth Group 标志',
      name: '初晓航',
      role: 'AI 工程师',
      contactInfo: '联系方式'
    },
    socialTitles: {
      instagram: 'Instagram',
      linkedin: '领英',
      github: 'GitHub',
      douyin: '抖音'
    }
  }
};

export const getSiteCopy = (language = 'en') => siteCopy[language] ?? siteCopy.en;
