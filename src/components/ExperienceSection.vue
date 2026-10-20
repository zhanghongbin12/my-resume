<template>
  <section id="experience">
    <div class="section-inner">
      <div class="section-heading">
        <h2 class="section-title">工作经历</h2>
        <p class="section-note">2015 年开始从事前端开发</p>
      </div>
      <div class="timeline">
        <article
          v-for="exp in experiences"
          :key="exp.company + exp.period"
          class="experience-row"
        >
          <div class="experience-meta">
            <p>{{ exp.period }}</p>
            <span>{{ exp.role }}</span>
          </div>
          <div class="experience-body">
            <h3>{{ exp.company }}</h3>
            <p class="body-copy">{{ exp.description }}</p>
            <ul class="achievements">
              <li v-for="item in exp.achievements" :key="item">{{ item }}</li>
            </ul>
            <ul class="tech-list">
              <li v-for="tag in exp.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import { experiences } from '../data/resume.js'
</script>
<style scoped>
.timeline {
  background: #fff;
  border-radius: 14px;
  padding: 10px 36px;
  border: 1px solid var(--border);
}
.experience-row {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 42px;
  padding: 30px 0;
}
.experience-row + .experience-row {
  border-top: 1px solid var(--border);
}
.experience-meta p {
  font-size: 13px;
  color: var(--text-secondary);
}
.experience-meta span {
  display: block;
  margin-top: 8px;
  color: var(--accent);
  font-size: 13px;
}
h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
}
.body-copy {
  font-size: 14px;
}
.achievements {
  padding-left: 18px;
  color: var(--text-secondary);
  font-size: 14px;
  margin: 12px 0 16px;
}
.achievements li {
  padding-left: 3px;
  margin-bottom: 6px;
}
.achievements li::marker {
  color: #a2b4cf;
}
@media (max-width: 760px) {
  .timeline {
    padding: 0 22px;
    border-radius: 12px;
  }
  .experience-row {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 24px 0;
  }
  .experience-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 18px;
    align-items: baseline;
  }
  .experience-meta span {
    margin: 0;
  }
  h3 {
    font-size: 17px;
  }
}
@media print {
  .timeline {
    padding: 0;
    border: 0;
  }
  .experience-row {
    grid-template-columns: 150px 1fr;
    gap: 20px;
    padding: 16px 0;
  }
}
</style>
