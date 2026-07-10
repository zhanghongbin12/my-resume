<template>
  <section id="about">
    <div class="section-inner">
      <span class="section-label">About</span>
      <h2 class="section-title">关于我</h2>

      <div class="about-content card fade-in" ref="contentEl">
        <blockquote class="about-quote">「{{ profile.quote }}」</blockquote>
        <div class="about-body">
          <p v-for="(paragraph, i) in profile.aboutParagraphs" :key="i">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { profile } from '../data/resume.js'
import { useFadeIn } from '../composables/useFadeIn.js'

const contentEl = ref(null)

onMounted(() => {
  useFadeIn([contentEl])
})
</script>

<style scoped>
.about-content {
  width: 100%;
}

.about-quote {
  font-size: clamp(1.25rem, 3vw, 1.6rem);
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 32px;
  padding: 0;
  border: none;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-body p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.85;
  margin-bottom: 20px;
}

.about-body p:last-child {
  margin-bottom: 0;
}
</style>
