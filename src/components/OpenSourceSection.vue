<template>
  <section id="open-source">
    <div class="section-inner">
      <div class="section-heading">
        <h2 class="section-title">个人作品</h2>
        <p class="section-note">可以直接打开体验的小项目</p>
      </div>
      <div class="works-grid">
        <article
          v-for="project in openSourceProjects"
          :key="project.name"
          class="work"
        >
          <a
            :href="project.preview"
            target="_blank"
            rel="noopener noreferrer"
            class="work-cover no-print"
            :aria-label="`预览 ${project.name}`"
            ><img
              :src="project.image"
              :alt="`${project.name}界面预览`"
              width="640"
              height="360"
              loading="lazy"
          /></a>
          <div class="work-body">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <a
              :href="project.preview"
              target="_blank"
              rel="noopener noreferrer"
              class="text-link no-print"
              >在线体验</a
            >
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import { openSourceProjects } from '../data/resume.js'
</script>
<style scoped>
.works-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 30px;
  align-items: start;
}
.work {
  min-width: 0;
}
.work:first-child {
  grid-row: span 2;
}
.work:not(:first-child) {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr);
  gap: 22px;
}
.work-cover {
  display: block;
  overflow: hidden;
  border-radius: 9px;
  aspect-ratio: 16 / 10;
  background: var(--bg-secondary);
}
.work:first-child .work-cover {
  aspect-ratio: 16 / 9;
}
.work-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.work:first-child .work-body {
  padding-top: 22px;
}
h3 {
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 8px;
}
.work:not(:first-child) h3 {
  font-size: 16px;
}
.work p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.9;
  margin-bottom: 16px;
}
.work .text-link {
  font-size: 12px;
}
@media (max-width: 960px) {
  .work:not(:first-child) {
    grid-template-columns: 110px minmax(0, 1fr);
    gap: 16px;
  }
}
@media (max-width: 760px) {
  .works-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .work:first-child {
    grid-row: auto;
  }
  .work:not(:first-child) {
    grid-template-columns: 120px minmax(0, 1fr);
    gap: 18px;
  }
}
@media (max-width: 360px) {
  .work:not(:first-child) {
    grid-template-columns: 1fr;
  }
}
@media print {
  .works-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .work:first-child {
    grid-row: auto;
  }
  .work:not(:first-child) {
    display: block;
  }
  .work:first-child .work-body {
    padding: 0;
  }
}
</style>
