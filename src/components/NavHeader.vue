<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">{{ profile.name }}</a>
      <nav class="nav-links no-print">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click="activeSection = item.id"
        >
          {{ item.label }}
        </a>
      </nav>
      <div class="nav-actions no-print">
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-social-link"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile, navItems } from '../data/resume.js'

const isScrolled = ref(false)
const activeSection = ref('hero')

const sectionIds = navItems.map((item) => item.id)

function handleScroll() {
  isScrolled.value = window.scrollY > 20

  const scrollPos = window.scrollY + 100
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.getElementById(sectionIds[i])
    if (el && el.offsetTop <= scrollPos) {
      activeSection.value = sectionIds[i]
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
}

.nav.scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-logo {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--text-primary);
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 4px;
  flex: 1;
  overflow-x: auto;
}

.nav-link {
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 8px;
  white-space: nowrap;
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-social-link {
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 8px;
  border: 1px solid var(--border);
  white-space: nowrap;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}

.nav-social-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(99, 102, 241, 0.3);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}
</style>
