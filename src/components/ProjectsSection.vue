<template>
  <section id="projects">
    <div class="section-inner">
      <div class="section-heading">
        <h2 class="section-title">项目经历</h2>
        <p class="section-note">从编辑器扩展到复杂数据页面</p>
      </div>
      <div class="project-list">
        <article
          v-for="(project, index) in projects"
          :id="project.id"
          :key="project.name"
          class="project"
          :class="{ 'project-featured': index === 0 }"
        >
          <div class="project-main">
            <div class="project-heading">
              <h3>{{ project.name }}</h3>
              <span class="project-period">{{ project.period }}</span>
            </div>
            <p class="body-copy project-description">
              {{ project.description }}
            </p>
            <h4>我的工作</h4>
            <ul class="responsibilities">
              <li
                v-for="item in project.responsibilities.slice(0, 3)"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
            <details>
              <summary>完整职责与项目成果</summary>
              <div class="details-body">
                <ul class="responsibilities">
                  <li
                    v-for="item in project.responsibilities.slice(3)"
                    :key="item"
                  >
                    {{ item }}
                  </li>
                </ul>
                <p class="body-copy">{{ project.result }}</p>
              </div>
            </details>
            <a
              v-if="project.link"
              :href="project.link"
              class="text-link no-print"
              target="_blank"
              rel="noopener noreferrer"
              >查看项目</a
            >
          </div>
          <aside class="project-aside">
            <p class="project-category">{{ project.highlight }}</p>
            <h4>参与重点</h4>
            <ul class="focus-list">
              <li v-for="focus in project.focus" :key="focus">{{ focus }}</li>
            </ul>
            <h4 class="tech-heading">使用技术</h4>
            <ul class="tech-list">
              <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
            </ul>
          </aside>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import { projects } from '../data/resume.js'
</script>
<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.project {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 235px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--bg-card);
  overflow: hidden;
}
.project-main {
  padding: 34px 38px;
}
.project-heading {
  margin-bottom: 18px;
}
h3 {
  font-size: 23px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.025em;
}
.project-period {
  font-size: 12px;
  color: var(--text-secondary);
  display: block;
  margin-top: 8px;
}
.project-description {
  margin-bottom: 24px;
  font-size: 14px;
}
h4 {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
}
.responsibilities {
  padding-left: 18px;
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.9;
}
.responsibilities li {
  padding-left: 3px;
  margin-bottom: 9px;
}
.responsibilities li::marker {
  color: #a2b4cf;
}
details {
  margin-top: 22px;
}
summary {
  cursor: pointer;
  color: var(--accent);
  font-size: 13px;
  width: fit-content;
  padding: 6px 0;
}
.details-body {
  margin-top: 14px;
}
.details-body .body-copy {
  font-size: 14px;
  margin-top: 18px;
}
.project-aside {
  background: #edf2fa;
  padding: 36px 26px;
}
.project-featured .project-aside {
  background: #e8f0fd;
}
.project-category {
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 32px;
}
.focus-list {
  list-style: none;
  color: var(--text-primary);
  font-size: 14px;
}
.focus-list li {
  margin-bottom: 12px;
}
.tech-heading {
  margin-top: 34px;
}
.project-aside .tech-list {
  gap: 7px 13px;
}
@media (max-width: 760px) {
  .project {
    grid-template-columns: 1fr;
    border-radius: 12px;
  }
  .project-main {
    padding: 25px 22px;
  }
  h3 {
    font-size: 20px;
  }
  .project-aside {
    padding: 22px;
  }
  .project-category {
    margin-bottom: 16px;
  }
  .focus-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
  }
  .focus-list li {
    margin: 0;
  }
  .tech-heading {
    margin-top: 22px;
  }
}
@media print {
  .project {
    display: block;
    border: 0;
    border-radius: 0;
  }
  .project-main {
    padding: 16px 0;
  }
  .project-aside {
    padding: 12px 0;
    background: white !important;
  }
  .focus-list {
    display: flex;
    gap: 20px;
  }
  .project-category,
  .project-aside h4 {
    display: none;
  }
  .focus-list li {
    margin-bottom: 6px;
  }
  summary {
    display: none;
  }
  .project-list {
    gap: 12px;
  }
}
</style>
