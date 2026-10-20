<template>
  <section id="skills">
    <div class="section-inner">
      <div class="section-heading">
        <h2 class="section-title">技术与工具</h2>
        <p class="section-note">结合实际项目使用</p>
      </div>
      <div class="skill-groups">
        <div v-for="group in skills" :key="group.category" class="skill-group">
          <h3>{{ group.category }}</h3>
          <dl>
            <div v-for="item in group.items" :key="item.name">
              <dt>{{ item.name }}</dt>
              <dd>{{ item.detail }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { skills } from '../data/resume.js'
</script>
<style scoped>
.skill-groups {
  background: #fff;
  padding: 12px 34px;
  border-radius: 14px;
  border: 1px solid var(--border);
}
.skill-group {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  gap: 40px;
  padding: 24px 0;
}
.skill-group + .skill-group {
  border-top: 1px solid var(--border);
}
h3 {
  font-size: 14px;
  color: var(--accent);
  font-weight: 500;
}
dl {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
dt {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.8;
}
dd {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 7px;
  line-height: 1.9;
}
@media (max-width: 960px) {
  .skill-group {
    grid-template-columns: 140px minmax(0, 1fr);
    gap: 24px;
  }
}
@media (max-width: 760px) {
  .skill-groups {
    padding: 0 22px;
    border-radius: 12px;
  }
  .skill-group {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  dl {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
@media print {
  .skill-groups {
    border: 0;
    padding: 0;
  }
  .skill-group {
    grid-template-columns: 130px 1fr;
    gap: 20px;
  }
}
</style>
