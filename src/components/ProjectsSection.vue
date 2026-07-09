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
            <h3 class="project-name">{{ project.name }}</h3>
            <span v-if="project.highlight" class="project-badge">{{ project.highlight }}</span>
          </div>
          <p class="project-desc">{{ project.description }}</p>
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
