export const profile = {
  name: '张宏斌',
  nameEn: 'Zhang Hongbin',
  title: '前端开发工程师',
  tagline: '用代码构建体验，用技术驱动业务',
  avatar: true,
  location: '北京',
  email: '1451572010@qq.com',
  phone: '13611261544',
  github: 'https://github.com/zhanghongbin12',
  links: [
    { label: 'GitHub', url: 'https://github.com/zhanghongbin12', icon: 'github' },
    { label: '掘金', url: 'https://juejin.cn/user/342703359405374/posts', icon: 'juejin' },
  ],
  quote: '追求技术深度与业务价值的平衡',
  aboutParagraphs: [
    '10 年前端开发经验，深耕 Web 前端工程化与可视化领域。擅长 Vue / React 技术栈，具备复杂业务系统架构与性能优化能力。',
    '注重代码质量与用户体验，善于跨团队协作推动项目落地。',
    '期待在更具挑战性的场景中创造更大价值，与团队一起构建有影响力的产品。',
  ],
  highlights: [
    { value: '10+', label: '年前端经验' },
    { value: '20+', label: '核心项目' },
    { value: '50%', label: '性能提升' },
  ],
}

export const skills = [
  {
    category: '前端框架',
    items: [
      { name: 'Vue.js', level: 95 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 88 },
    ],
  },
  {
    category: '工程化 & 工具',
    items: [
      { name: 'Webpack / Vite', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Git / CI/CD', level: 92 },
      { name: 'Monorepo', level: 78 },
    ],
  },
  {
    category: '其他能力',
    items: [
      { name: '性能优化', level: 90 },
      { name: '数据可视化', level: 85 },
      { name: '跨端开发', level: 75 },
      { name: '团队管理', level: 70 },
    ],
  },
]

export const experiences = [
  {
    company: '美团',
    role: '高级前端开发工程师',
    period: '2021.06 - 至今',
    location: '北京',
    description: '负责核心业务平台前端架构设计与开发，主导多个千万级用户产品的技术升级。',
    achievements: [
      '主导商家端管理平台 Vue3 重构，首屏加载时间降低 52%，代码可维护性显著提升',
      '设计并实现前端微前端架构方案，支撑 8 个业务团队独立开发部署',
      '搭建组件库与设计系统，组件复用率提升 60%，UI 一致性大幅改善',
      '推动前端性能监控体系建设，核心页面 LCP 指标优化至 1.2s 以内',
    ],
    tags: ['Vue3', '微前端', '性能优化', '组件库'],
  },
  {
    company: '字节跳动',
    role: '前端开发工程师',
    period: '2019.07 - 2021.05',
    location: '北京',
    description: '参与抖音电商业务前端开发，负责商品详情页与购物车模块。',
    achievements: [
      '重构商品详情页渲染逻辑，页面 FPS 稳定在 60，用户停留时长提升 18%',
      '实现基于 Virtual List 的长列表优化方案，内存占用降低 40%',
      '参与前端监控 SDK 开发，覆盖 200+ 页面异常自动上报',
    ],
    tags: ['React', '性能优化', '监控体系'],
  },
  {
    company: '某互联网创业公司',
    role: '前端开发工程师',
    period: '2018.07 - 2019.06',
    location: '上海',
    description: '作为早期前端成员，从 0 到 1 搭建公司官网与管理后台。',
    achievements: [
      '独立完成管理后台架构搭建，支持 10+ 业务模块快速迭代',
      '引入 ESLint + Husky 规范代码质量，Bug 率下降 35%',
    ],
    tags: ['Vue2', 'Element UI', '工程化'],
  },
]

export const projects = [
  {
    name: '3D 地球可视化 Demo',
    description: '基于 Three.js 的交互式 3D 地球展示，包含大气层、云层、星空背景等视觉效果，支持轨道控制与自转动画。',
    tech: ['Vue', 'Three.js', 'WebGL'],
    link: 'https://github.com/wb_zhanghongbin/my-three1',
    highlight: 'GitHub Pages 在线部署',
  },
  {
    name: '前端组件库',
    description: '面向内部业务的标准化 UI 组件库，包含 40+ 组件，支持主题定制与按需加载，已在 5 条业务线落地。',
    tech: ['Vue3', 'TypeScript', 'Vite', 'Storybook'],
    link: null,
    highlight: '组件复用率 60%+',
  },
  {
    name: '数据可视化大屏',
    description: '实时业务数据监控大屏，支持多维度数据下钻、图表联动，服务于运营决策场景。',
    tech: ['ECharts', 'WebSocket', 'Canvas'],
    link: null,
    highlight: '支撑日均 1000+ 访问',
  },
]

export const education = [
  {
    school: '某某大学',
    degree: '计算机科学与技术 · 本科',
    period: '2014.09 - 2018.06',
    description: '主修数据结构、算法、操作系统、计算机网络等核心课程。获校级优秀毕业生、国家励志奖学金。',
  },
]

export const navItems = [
  { id: 'hero', label: '首页' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'skills', label: '技能' },
  { id: 'about', label: '关于' },
  { id: 'contact', label: '联系' },
]
