<template>
  <section id="contact">
    <div class="section-inner contact-inner">
      <span class="section-label">Contact</span>
      <h2 class="section-title">联系我</h2>

      <div class="contact-card card fade-in" ref="cardEl">
        <p class="contact-text">
          如果您对我的经历感兴趣，欢迎随时联系。期待与您进一步交流！
        </p>

        <div class="contact-methods">
          <a :href="`mailto:${profile.email}`" class="contact-item">
            <span class="contact-icon">✉</span>
            <div>
              <span class="contact-label">邮箱</span>
              <span class="contact-value">{{ profile.email }}</span>
            </div>
          </a>
          <a :href="`tel:${profile.phone}`" class="contact-item">
            <span class="contact-icon">📱</span>
            <div>
              <span class="contact-label">电话</span>
              <span class="contact-value">{{ profile.phone }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer no-print">
    <p>© {{ year }} {{ profile.name }}. Built with Vue 3 + Vite.</p>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { profile } from '../data/resume.js'
import { useFadeIn } from '../composables/useFadeIn.js'

const cardEl = ref(null)
const year = computed(() => new Date().getFullYear())

onMounted(() => {
  useFadeIn([cardEl])
})
</script>

<style scoped>
.contact-inner {
  text-align: center;
}

.contact-card {
  max-width: 640px;
  margin: 0 auto;
}

.contact-text {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius);
  transition: background 0.2s;
  color: inherit;
}

a.contact-item:hover {
  background: rgba(255, 255, 255, 0.06);
  color: inherit;
}

.contact-icon {
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.12);
  border-radius: 10px;
}

.contact-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact-value {
  font-size: 0.95rem;
  font-weight: 500;
}

.footer {
  text-align: center;
  padding: 32px 24px 48px;
  font-size: 0.8rem;
  color: var(--text-muted);
  border-top: 1px solid var(--border);
}
</style>
