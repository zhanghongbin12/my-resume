<template>
  <section id="about">
    <div class="section-inner">
      <span class="section-label">About</span>
      <h2 class="section-title">关于我</h2>

      <div class="about-grid">
        <div class="about-text card fade-in" ref="textEl">
          <p>{{ profile.summary }}</p>
        </div>

        <div class="about-info card fade-in" ref="infoEl">
          <div class="info-item">
            <span class="info-label">姓名</span>
            <span>{{ profile.name }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">职位</span>
            <span>{{ profile.title }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">所在地</span>
            <span>{{ profile.location }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">邮箱</span>
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </div>
          <div class="info-item">
            <span class="info-label">电话</span>
            <span>{{ profile.phone }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { profile } from '../data/resume.js'
import { useFadeIn } from '../composables/useFadeIn.js'

const textEl = ref(null)
const infoEl = ref(null)

onMounted(() => {
  useFadeIn([textEl, infoEl])
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
}

.about-text p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.info-label {
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
