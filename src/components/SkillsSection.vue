<template>
  <section id="skills">
    <div class="section-inner">
      <span class="section-label">Skills</span>
      <h2 class="section-title">专业技能</h2>

      <div class="skills-grid">
        <div
          v-for="(group, gi) in skills"
          :key="group.category"
          class="card skill-group fade-in"
          :ref="(el) => setRef(el, gi)"
        >
          <h3 class="group-title">{{ group.category }}</h3>
          <div v-for="item in group.items" :key="item.name" class="skill-item">
            <div class="skill-header">
              <span>{{ item.name }}</span>
              <span class="skill-level">{{ item.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" :style="{ width: item.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { skills } from '../data/resume.js'
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
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.group-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--accent-light);
}

.skill-item {
  margin-bottom: 18px;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.skill-level {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.skill-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: var(--gradient);
  border-radius: 999px;
  transition: width 1s ease;
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
