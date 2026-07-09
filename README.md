# 个人在线简历

基于 Vue 3 + Vite 构建的单页个人博客/简历网站，用于面试展示，提升个人品牌与关注度。

## 功能特性

- 深色主题 + 渐变视觉，现代专业风格
- 单页滚动布局：首页 / 关于 / 技能 / 经历 / 项目 / 教育 / 联系
- 滚动动画与导航高亮
- 支持浏览器打印导出 PDF
- 响应式设计，适配移动端
- GitHub Pages 一键部署

## 快速开始

```bash
cd my-resume
npm install
npm run dev
```

浏览器访问 http://localhost:5173

## 自定义简历内容

所有简历数据集中在 `src/data/resume.js`，修改该文件即可更新页面内容：

- `profile` — 个人信息、简介、亮点数据
- `skills` — 技能分类与熟练度
- `experiences` — 工作经历
- `projects` — 项目展示
- `education` — 教育背景

## 部署

推送到 GitHub 后，在仓库 Settings → Pages 中选择 **GitHub Actions** 作为 Source，push 到 main/master 分支即可自动部署。

## 技术栈

- Vue 3 (Composition API)
- Vite 4
- 纯 CSS（无 UI 框架依赖）
