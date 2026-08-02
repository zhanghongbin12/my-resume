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
            <span class="skill-name">{{ item.name }}</span>
            <span v-if="item.detail" class="skill-detail">{{ item.detail }}</span>
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
  margin-bottom: 20px;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-name {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-detail {
  display: block;
  margin-top: 6px;
  font-size: 0.8rem;
  line-height: 1.55;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
