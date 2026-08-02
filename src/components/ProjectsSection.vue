<template>
  <section id="projects">
    <div class="section-inner">
      <span class="section-label">Projects</span>
      <h2 class="section-title">精选项目</h2>

      <div class="projects-grid">
        <div
          v-for="(project, i) in projects"
          :key="project.name"
          class="card project-card fade-in"
          :ref="(el) => setRef(el, i)"
        >
          <div class="project-header">
            <div>
              <h3 class="project-name">{{ project.name }}</h3>
              <span v-if="project.period" class="project-period">{{ project.period }}</span>
            </div>
            <span v-if="project.highlight" class="project-badge">{{ project.highlight }}</span>
          </div>
          <p class="project-desc">{{ project.description }}</p>
          <div v-if="project.responsibilities?.length" class="project-section">
            <h4>核心职责</h4>
            <ul class="project-list">
              <li v-for="(item, j) in project.responsibilities" :key="j">{{ item }}</li>
            </ul>
          </div>
          <div v-if="project.result" class="project-section project-result">
            <h4>项目成果</h4>
            <p>{{ project.result }}</p>
          </div>
          <div class="project-tech">
            <span v-for="t in project.tech" :key="t" class="tag">{{ t }}</span>
          </div>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link no-print"
          >
            查看项目 →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { projects } from '../data/resume.js'
import { useFadeIn } from '../composables/useFadeIn.js'

const cardRefs = ref([])

function setRef(el, index) {
  if (el) cardRefs.value[index] = el
}

onMounted(() => {
  useFadeIn(cardRefs)
})
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}

.project-name {
  font-size: 1.1rem;
  font-weight: 700;
}

.project-period {
  display: inline-block;
  margin-top: 4px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.project-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(74, 222, 128, 0.12);
  color: #4ade80;
  border: 1px solid rgba(74, 222, 128, 0.25);
  white-space: nowrap;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.project-section {
  margin-bottom: 16px;
}

.project-section h4 {
  margin-bottom: 8px;
  font-size: 0.85rem;
  color: var(--accent-light);
}

.project-list {
  list-style: none;
}

.project-list li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 6px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.65;
}

.project-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-light);
}

.project-result p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.65;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.project-link {
  font-size: 0.85rem;
  font-weight: 600;
}
</style>
