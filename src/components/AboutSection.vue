<template>
  <section id="about">
    <div class="section-inner about-layout">
      <div>
        <h2 class="section-title">关于我</h2>
        <p class="about-lead">{{ profile.quote }}</p>
      </div>
      <div class="about-body">
        <p
          v-for="paragraph in profile.aboutParagraphs"
          :key="paragraph"
          class="body-copy"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { profile } from '../data/resume.js'
</script>
<style scoped>
.about-layout {
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  gap: 80px;
}
.about-lead {
  font-size: 17px;
  margin-top: 24px;
  line-height: 1.9;
  max-width: 220px;
}
.about-body p {
  margin-bottom: 18px;
}
.about-body p:last-child {
  margin-bottom: 0;
}
@media (max-width: 760px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .about-lead {
    max-width: none;
    margin-top: 16px;
  }
}
</style>
