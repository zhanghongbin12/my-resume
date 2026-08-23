<template>
  <section id="open-source">
    <div class="section-inner">
      <div class="section-heading">
        <div>
          <span class="section-label">Open Source</span>
          <h2 class="section-title">GitHub 开源作品</h2>
        </div>
      </div>

      <div class="opensource-grid">
        <article
          v-for="project in openSourceProjects"
          :key="project.name"
          class="card opensource-card fade-in"
          ref="cardRefs"
        >
          <a
            v-if="project.preview"
            :href="project.preview"
            target="_blank"
            rel="noopener noreferrer"
            class="opensource-cover no-print"
            :aria-label="`预览 ${project.name}`"
          >
            <img
              :src="project.image"
              :alt="`${project.name} 预览`"
              class="opensource-image"
              loading="lazy"
            />
            <span class="opensource-cover-mask">
              <span class="opensource-preview">在线预览 →</span>
            </span>
          </a>

          <div class="opensource-body">

            <h3 class="opensource-name">{{ project.name }}</h3>
            <p class="opensource-desc">{{ project.description }}</p>

            <div class="opensource-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { openSourceProjects } from '../data/resume.js'
import { useFadeIn } from '../composables/useFadeIn.js'

const cardRefs = ref([])

onMounted(() => {
  useFadeIn(cardRefs)
})
</script>

<style scoped>
.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 48px;
}

.section-heading .section-title {
  margin-bottom: 0;
}

.opensource-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.opensource-card {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
}

.opensource-cover {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-secondary);
}

.opensource-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.opensource-cover-mask {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 15, 0) 0%,
    rgba(10, 10, 15, 0.65) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.opensource-cover:hover .opensource-image {
  transform: scale(1.06);
}

.opensource-cover:hover .opensource-cover-mask {
  opacity: 1;
}

.opensource-preview {
  padding: 8px 18px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 999px;
  background: rgba(10, 10, 15, 0.6);
  backdrop-filter: blur(8px);
}

.opensource-body {
  padding: 22px 22px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.opensource-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.opensource-category {
  display: inline-flex;
  max-width: 100%;
  padding: 4px 10px;
  border: 1px solid rgba(129, 140, 248, 0.28);
  border-radius: 999px;
  color: var(--accent-light);
  background: rgba(99, 102, 241, 0.12);
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.4;
}

.opensource-link {
  flex: 0 0 auto;
  font-size: 0.8rem;
  font-weight: 600;
}

.opensource-name {
  margin-bottom: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  word-break: break-all;
}

.opensource-desc {
  flex: 1;
  margin-bottom: 16px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
}

.opensource-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 1024px) {
  .opensource-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .section-heading {
    flex-direction: column;
    margin-bottom: 32px;
  }

  .opensource-grid {
    grid-template-columns: 1fr;
  }

  .opensource-top {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
