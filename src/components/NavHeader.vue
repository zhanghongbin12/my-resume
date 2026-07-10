<template>
  <header class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo" @click="closeMenu">{{ profile.name }}</a>

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
          :class="link.icon"
        >
          <SocialIcon :icon="link.icon" />
          {{ link.label }}
        </a>
      </div>

      <button
        class="menu-toggle no-print"
        :class="{ open: isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-label="打开导航菜单"
        @click="toggleMenu"
      >
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
      </button>
    </div>

    <div
      class="mobile-menu no-print"
      :class="{ open: isMenuOpen }"
      @click.self="closeMenu"
    >
      <nav class="mobile-nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="mobile-nav-link"
          :class="{ active: activeSection === item.id }"
          @click="handleNavClick(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="mobile-actions">
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="mobile-social-link"
          :class="link.icon"
          @click="closeMenu"
        >
          <SocialIcon :icon="link.icon" />
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { profile, navItems } from '../data/resume.js'
import SocialIcon from './SocialIcon.vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
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

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleNavClick(id) {
  activeSection.value = id
  closeMenu()
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
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
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: 8px;
  border: 1px solid var(--border);
  white-space: nowrap;
  transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.2s;
}

.nav-social-link:hover {
  transform: translateY(-1px);
}

.nav-social-link.github:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
}

.nav-social-link.juejin:hover {
  color: #4da3ff;
  background: rgba(30, 128, 255, 0.12);
  border-color: rgba(30, 128, 255, 0.35);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.menu-bar {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}

.menu-toggle.open .menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.open .menu-bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open .menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .nav-inner {
    gap: 12px;
  }

  .nav-links,
  .nav-actions {
    display: none;
  }

  .menu-toggle {
    display: flex;
    margin-left: auto;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    bottom: 0;
    padding: 24px;
    background: rgba(10, 10, 15, 0.96);
    backdrop-filter: blur(16px);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: opacity 0.25s, visibility 0.25s, transform 0.25s;
  }

  .mobile-menu.open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .mobile-nav-link {
    padding: 14px 16px;
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-secondary);
    border-radius: 10px;
    transition: color 0.2s, background 0.2s;
  }

  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.06);
  }

  .mobile-actions {
    display: flex;
    gap: 12px;
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--border);
  }

  .mobile-social-link {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 16px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    border-radius: 10px;
    border: 1px solid var(--border);
    transition: color 0.2s, background 0.2s, border-color 0.2s;
  }

  .mobile-social-link.github:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.25);
  }

  .mobile-social-link.juejin:hover {
    color: #4da3ff;
    background: rgba(30, 128, 255, 0.12);
    border-color: rgba(30, 128, 255, 0.35);
  }
}
</style>
