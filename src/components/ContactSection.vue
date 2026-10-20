<template>
  <section id="contact">
    <div class="section-inner contact-panel">
      <div>
        <h2>聊聊下一份工作</h2>
        <p>如果岗位与我的经历相符，欢迎联系。</p>
      </div>
      <div class="contact-methods">
        <a :href="`mailto:${profile.email}`"
          ><span>邮箱</span>{{ profile.email }}</a
        ><a :href="`tel:${profile.phone}`"
          ><span>电话</span>{{ profile.phone }}</a
        >
      </div>
    </div>
  </section>
  <footer class="footer no-print">
    <div class="section-inner footer-inner">
      <p>© {{ year }} {{ profile.name }}</p>
      <a href="#hero">回到顶部</a>
    </div>
  </footer>
</template>
<script setup>
import { profile } from '../data/resume.js'
const year = new Date().getFullYear()
</script>
<style scoped>
.contact-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;
  background: #e5edfa;
  padding: 38px 42px;
  border-radius: 16px;
}
h2 {
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.contact-panel p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 12px;
}
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.contact-methods a {
  display: flex;
  align-items: baseline;
  gap: 22px;
  font-size: 17px;
  overflow-wrap: anywhere;
}
.contact-methods span {
  font-size: 12px;
  color: var(--text-secondary);
  flex-shrink: 0;
}
.footer {
  padding: 0 32px 32px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 12px;
}
.footer a {
  color: var(--text-secondary);
}
@media (max-width: 760px) {
  .contact-panel {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 28px 24px;
    border-radius: 12px;
  }
  h2 {
    font-size: 23px;
  }
  .contact-methods a {
    font-size: 15px;
    gap: 16px;
  }
  .footer {
    padding: 0 22px 24px;
  }
}
@media print {
  .contact-panel {
    background: white;
    padding: 0;
  }
  h2 {
    font-size: 18pt;
  }
}
</style>
