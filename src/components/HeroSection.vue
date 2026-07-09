<template>
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="hero-inner">
      <div class="hero-badge fade-in" ref="el0">
        <span class="badge-dot"></span>
        开放新的职业机会
      </div>

      <h1 class="hero-name fade-in" ref="el1">
        {{ profile.name }}
        <span class="hero-name-en">{{ profile.nameEn }}</span>
      </h1>

      <p class="hero-title fade-in" ref="el2">{{ profile.title }}</p>
      <p class="hero-tagline fade-in" ref="el3">{{ profile.tagline }}</p>

      <div class="hero-meta fade-in" ref="el4">
        <span>{{ profile.location }}</span>
        <span class="dot">·</span>
        <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      </div>

      <div class="hero-actions fade-in no-print" ref="el5">
        <a href="#contact" class="btn-primary">联系我</a>
        <a href="#experience" class="btn-secondary">查看经历</a>
      </div>

      <div class="hero-stats fade-in" ref="el6">
        <div v-for="item in profile.highlights" :key="item.label" class="stat">
          <span class="stat-value">{{ item.value }}</span>
          <span class="stat-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { profile } from '../data/resume.js'

const refs = [ref(null), ref(null), ref(null), ref(null), ref(null), ref(null), ref(null)]
const [el0, el1, el2, el3, el4, el5, el6] = refs

onMounted(() => {
  refs.forEach((r, i) => {
    setTimeout(() => r.value?.classList.add('visible'), 100 + i * 120)
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: calc(var(--nav-height) + 40px) 24px 80px;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: #6366f1;
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: #a855f7;
  bottom: -80px;
  left: -80px;
  animation: float 10s ease-in-out infinite reverse;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}

.hero-inner {
  max-width: var(--max-width);
  width: 100%;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent-light);
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 999px;
  margin-bottom: 28px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-name {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 12px;
}

.hero-name-en {
  display: block;
  font-size: 0.35em;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
  margin-top: 8px;
}

.hero-title {
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 600;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.hero-tagline {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 520px;
  margin-bottom: 20px;
}

.hero-meta {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.hero-meta .dot {
  margin: 0 8px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 56px;
}

.btn-primary,
.btn-secondary {
  padding: 12px 28px;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary {
  color: white;
  background: var(--gradient);
  box-shadow: 0 4px 24px var(--accent-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px var(--accent-glow);
  color: white;
}

.btn-secondary {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 560px;
}

.stat {
  text-align: center;
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 4px;
}

@media (max-width: 768px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
