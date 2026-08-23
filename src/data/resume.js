export const profile = {
  name: '张宏斌',
  nameEn: 'Zhang Hongbin',
  title: '前端开发工程师',
  tagline: '专注复杂中后台、低代码平台与数据可视化',
  avatar: true,
  location: '北京',
  email: '1451572010@qq.com',
  phone: '13611261544',
  github: 'https://github.com/zhanghongbin12',
  links: [
    { label: 'GitHub', url: 'https://github.com/zhanghongbin12', icon: 'github' },
    { label: '掘金', url: 'https://juejin.cn/user/342703359405374/posts', icon: 'juejin' },
  ],
  quote: '以工程化能力解决复杂业务问题',
  aboutParagraphs: [
    '10 年以上前端开发经验，长期负责中后台、低代码平台和数据可视化系统建设，具备从 0 到 1 搭建平台、抽象通用组件和优化复杂页面性能的经验。',
    '熟悉 React、TypeScript、Vue、MobX 等技术栈，参与 lowcode-engine 编辑器扩展、物料体系、Schema 管理、版本回滚及智能辅助搭建等核心能力建设。',
    '重视工程质量与真实业务价值，能够持续响应用户需求、定位线上问题，并推动组件复用、工程规范和产品体验迭代。',
  ],
  highlights: [
    { value: '10+', label: '年前端经验' },
    { value: '200+', label: '人用户群需求支持' },
    { value: '3', label: '大核心能力方向' },
  ],
}

export const skills = [
  {
    category: '核心技术',
    items: [
      { name: 'React / TypeScript / Vue', detail: '复杂中后台、PC/H5 与移动端业务开发' },
      { name: '组件化与状态管理', detail: 'MobX、通用组件及业务组件体系建设' },
      { name: 'Ant Design / View Design / Vant', detail: '企业级界面开发与多端适配' },
    ],
  },
  {
    category: '低代码与智能化',
    items: [
      { name: 'lowcode-engine / Schema / Setter', detail: '编辑器插件、物料体系与属性配置扩展' },
      { name: 'ECharts / 数据图表', detail: '复杂图表、数据卡片与经营分析场景' },
      { name: 'AI 辅助开发 / Vibe Coding', detail: '辅助方案拆解、编码、调试与问题定位' },
    ],
  },
  {
    category: '服务端与工程化',
    items: [
      { name: 'Node.js / Java', detail: '服务端功能开发、接口联调与问题排查' },
      { name: 'pnpm Workspace / Monorepo', detail: '多业务包协作、公共能力复用与依赖治理' },
      { name: 'Webpack 5 / Vite / Git Hooks', detail: '构建配置、开发链路与代码质量保障' },
    ],
  },
]

export const experiences = [
  {
    company: '柯莱特科技有限责任公司（美团）',
    role: '资深前端开发工程师',
    period: '2023.12 - 至今',
    location: '',
    description: '负责低代码搭建平台、数据可视化平台等中后台系统的前端架构设计与核心功能开发。',
    achievements: [
      '重点参与 lowcode-engine 扩展、物料体系、编辑器插件、版本管理、AI Agent 辅助搭建，以及复杂表格与可视化性能优化。',
      '独立负责 200+ 人用户群的需求响应、问题排查与产品优化，持续沉淀高频问题和需求并推动产品迭代。',
    ],
    tags: ['React', 'TypeScript', '服务端', 'Vibe Coding', '低代码', '数据可视化'],
  },
  {
    company: '北京志翔科技股份有限公司',
    role: '高级前端开发工程师',
    period: '2021.11 - 2023.12',
    location: '',
    description: '主导文件安全摆渡平台前端重构，并独立负责移动端项目从 0 到 1 建设。',
    achievements: [
      '负责多端适配、性能优化、组件复用及 OnlyOffice、Seafile 等开源组件的二次开发与客户定制。',
      '推动团队前端规范落地；参与项目获得 2022 年度优秀团队荣誉，移动端产品上线后获得客户正向反馈。',
    ],
    tags: ['Vue', 'React', '移动端 H5', 'OnlyOffice', 'Seafile'],
  },
  {
    company: '上海微创软件股份有限公司（快手）',
    role: '前端开发工程师',
    period: '2018.09 - 2021.10',
    location: '',
    description: '参与快手 BPM 系统从 0 到 1 建设，推动内部业务流程线上化。',
    achievements: [
      '负责合同电子签约、审批流和通用组件等核心模块开发，覆盖财务、法务、采购等业务流程。',
      '多个关键模块按期交付并获得团队及业务方认可，支撑内部流程自动化和合规效率提升。',
    ],
    tags: ['React', 'BPM', '审批流', '通用组件'],
  },
  {
    company: '北京英贝思科技有限公司',
    role: '前端开发工程师',
    period: '2016.08 - 2018.09',
    location: '',
    description: '独立负责多个 PC/H5 Web 项目的前端开发与优化。',
    achievements: [
      '完成 Vue、jQuery、ECharts 项目开发，负责移动端适配、接口联调、浏览器兼容性处理和页面性能优化。',
      '一年半内完成 30+ 功能、100+ 页面迭代，获评 2018 年 Q1 优秀员工。',
    ],
    tags: ['Vue', 'jQuery', 'ECharts', 'PC / H5'],
  },
  {
    company: '北京礼诚天下国际贸易有限公司',
    role: '初级前端开发工程师',
    period: '2015.11 - 2016.08',
    location: '',
    description: '负责公司官网及电商平台 PC/H5 页面开发，参与页面重构与项目交付。',
    achievements: [
      '完成浏览器兼容性处理、加载性能优化，以及与 UI、后端团队的接口联调。',
    ],
    tags: ['PC / H5', '页面重构', '性能优化'],
  },
]

export const projects = [
  {
    name: 'Popcorn 低代码搭建平台 - 美团',
    period: '2023.12 - 2025.12',
    description: '面向内部中后台场景建设的企业级低代码搭建平台，基于 lowcode-engine 二次开发，支持可视化拖拽、物料扩展、页面编排、协同开发、版本管理、快速发布与回滚，并接入 AI Agent 辅助页面搭建。',
    responsibilities: [
      '参与编辑器架构设计、模块拆分、状态管理和工程化配置，负责平台前端核心能力建设。',
      '定制编辑器插件、物料体系和属性配置能力，支持业务组件、区块、模板等多种物料接入。',
      '参与页面 Schema 管理、版本快照和一键回滚能力建设，保障页面资产可追溯、可恢复。',
      '接入智能辅助搭建能力，并持续负责用户群需求响应、问题定位和体验优化。',
    ],
    result: '沉淀通用物料、编辑器插件、Schema 管理和版本回滚能力；项目阶段结束后，相关能力继续在后续数据平台与业务搭建场景中复用。',
    tech: ['React', 'TypeScript', 'MobX', 'Ant Design', 'lowcode-engine', 'Schema', 'pnpm'],
    link: null,
    highlight: '企业级低代码平台',
  },
  {
    name: '慧眼数据平台 - 美团',
    period: '2024.10 - 至今',
    description: '面向到餐业务销售和管理层的数据分析与可视化平台，提供城市经营大盘、业绩看板、运营分析等能力，通过复杂表格、图表和数据卡片支撑经营监控、问题定位与业务决策。',
    responsibilities: [
      '负责核心模块开发，参与页面架构设计、通用组件封装和复杂数据可视化能力建设。',
      '基于 ECharts 和业务图表组件实现多类型图表、数据卡片及联动分析场景。',
      '使用 react-window 虚拟化、渲染计算控制与 IndexedDB 持久化，优化大数据量页面体验。',
      '参与智能数据助手应用层建设，支持会话交互、Markdown、图表与定制业务卡片展示。',
    ],
    result: '沉淀可复用的数据展示组件与低代码物料，支持源码开发和低代码搭建场景复用，提升复杂数据页面的开发一致性。',
    tech: ['React 17', 'TypeScript', 'MobX 6', 'ECharts 5', 'Node.js', 'Java', 'Vibe Coding', 'Monorepo'],
    link: null,
    highlight: '数据分析与可视化',
  },
  {
    name: '文件安全摆渡平台及移动端 - 志翔科技',
    period: '2021.11 - 2023.11',
    description: '面向 ToB 客户的数据安全产品，用于跨网络保护区的数据安全流转，支持文件审批、权限控制、流程配置、多端访问和客户定制化部署。',
    responsibilities: [
      '主导平台前端重构与核心功能迭代，优化代码结构、组件复用和页面交互体验。',
      '独立负责移动端项目从 0 到 1 搭建，实现 PC/移动端资源自动适配。',
      '参与 OnlyOffice、Seafile 等开源组件二次开发，支持文件在线预览、文档特殊处理和客户定制。',
      '优化项目构建速度、首屏加载和大数据量页面性能，并推动代码规范、组件封装和项目复盘。',
    ],
    result: '项目获得 2022 年度优秀团队荣誉，移动端产品上线后获得客户正向反馈。',
    tech: ['Vue', 'React', 'View Design', 'Vant', 'ECharts', 'OnlyOffice', 'Seafile', '移动端 H5'],
    link: null,
    highlight: 'ToB 数据安全产品',
  },
]

export const openSourceProjects = [
  {
    name: 'AI 智能助手',
    preview: 'https://zhanghongbin12.github.io/llm-assistant/',
    image: '/llm-assistant.jpg',
    description: '聚焦多轮对话与流式响应，整合会话上下文管理与模型路由能力，覆盖从提示词工程到交互体验的完整前端落地链路。',
  },
  {
    name: '网页小游戏',
    preview: 'https://zhanghongbin12.github.io/saoleigame/dist/',
    image: '/saoleigame.png',
    description: 'AI 协作完成的扫雷小游戏，从需求拆解、交互设计、状态机实现到一键部署上线，沉淀 AI 辅助前端工程的全链路实践。',
  },
  {
    name: 'Three.js 3D 作品',
    preview: 'https://zhanghongbin12.github.io/my-three/',
    image: '/my-three.jpg',
    description: 'Three.js 高保真 3D 作品集，融合纹理映射、大气辉光与 OrbitControls 轨道控制，呈现沉浸式行星场景与实时交互。',
  },
]

export const education = []

export const navItems = [
  { id: 'hero', label: '首页' },
  { id: 'experience', label: '经历' },
  { id: 'projects', label: '项目' },
  { id: 'open-source', label: '开源' },
  { id: 'skills', label: '技能' },
  { id: 'about', label: '关于' },
  { id: 'contact', label: '联系' },
]
