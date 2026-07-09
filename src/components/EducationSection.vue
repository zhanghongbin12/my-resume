<template>
  <section id="education">
    <div class="section-inner">
      <span class="section-label">Education</span>
      <h2 class="section-title">教育背景</h2>

      <div
        v-for="(edu, i) in education"
        :key="edu.school"
        class="card edu-card fade-in"
        :ref="(el) => setRef(el, i)"
      >
        <div class="edu-header">
          <div>
            <h3 class="edu-school">{{ edu.school }}</h3>
            <p class="edu-degree">{{ edu.degree }}</p>
          </div>
          <span class="edu-period">{{ edu.period }}</span>
        </div>
        <p class="edu-desc">{{ edu.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { education } from '../data/resume.js'
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
.edu-card {
  max-width: 720px;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
}

.edu-school {
  font-size: 1.15rem;
  font-weight: 700;
}

.edu-degree {
  font-size: 0.9rem;
  color: var(--accent-light);
  margin-top: 4px;
}

.edu-period {
  font-size: 0.85rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

.edu-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
}
</style>
