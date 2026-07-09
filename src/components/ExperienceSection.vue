<template>
  <section id="experience">
    <div class="section-inner">
      <span class="section-label">Experience</span>
      <h2 class="section-title">工作经历</h2>

      <div class="timeline">
        <div
          v-for="(exp, i) in experiences"
          :key="exp.company + exp.period"
          class="timeline-item fade-in"
          :ref="(el) => setRef(el, i)"
        >
          <div class="timeline-dot"></div>
          <div class="card exp-card">
            <div class="exp-header">
              <div>
                <h3 class="exp-company">{{ exp.company }}</h3>
                <p class="exp-role">{{ exp.role }}</p>
              </div>
              <div class="exp-meta">
                <span class="exp-period">{{ exp.period }}</span>
                <span class="exp-location">{{ exp.location }}</span>
              </div>
            </div>
            <p class="exp-desc">{{ exp.description }}</p>
            <ul class="exp-achievements">
              <li v-for="(item, j) in exp.achievements" :key="j">{{ item }}</li>
            </ul>
            <div class="exp-tags">
              <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { experiences } from '../data/resume.js'
import { useFadeIn } from '../composables/useFadeIn.js'

const itemRefs = ref([])

function setRef(el, index) {
  if (el) itemRefs.value[index] = el
}

onMounted(() => {
  useFadeIn(itemRefs)
})
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), transparent);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 28px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid var(--bg-primary);
  box-shadow: 0 0 12px var(--accent-glow);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
}

.exp-company {
  font-size: 1.15rem;
  font-weight: 700;
}

.exp-role {
  font-size: 0.9rem;
  color: var(--accent-light);
  margin-top: 4px;
}

.exp-meta {
  text-align: right;
  flex-shrink: 0;
}

.exp-period {
  display: block;
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.exp-location {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.exp-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.exp-achievements {
  list-style: none;
  margin-bottom: 16px;
}

.exp-achievements li {
  position: relative;
  padding-left: 20px;
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
  line-height: 1.6;
}

.exp-achievements li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-light);
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 768px) {
  .exp-header {
    flex-direction: column;
  }

  .exp-meta {
    text-align: left;
  }
}
</style>
