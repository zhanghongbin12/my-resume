<template>
  <header class="nav no-print">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo" @click="closeMenu"
        >{{ profile.name }}<span>前端开发</span></a
      >
      <nav class="nav-links" aria-label="主导航">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :aria-current="activeSection === item.id ? 'location' : undefined"
          >{{ item.label }}</a
        >
      </nav>
      <div class="nav-socials">
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          ><SocialIcon :icon="link.icon" />{{ link.label }}</a
        >
      </div>
      <button
        class="menu-toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? '关闭导航菜单' : '打开导航菜单'"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          aria-hidden="true"
          focusable="false"
        >
          <path v-if="isMenuOpen" d="m6 6 12 12M6 18 18 6" />
          <path v-else d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <nav
      v-if="isMenuOpen"
      id="mobile-menu"
      class="mobile-menu"
      aria-label="移动端导航"
    >
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="`#${item.id}`"
        :aria-current="activeSection === item.id ? 'location' : undefined"
        @click="closeMenu"
        >{{ item.label }}</a
      >
      <div class="mobile-socials">
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
          >{{ link.label }}</a
        >
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { profile, navItems } from '../data/resume.js'
import SocialIcon from './SocialIcon.vue'
const isMenuOpen = ref(false)
const activeSection = ref('hero')
const closeMenu = () => {
  isMenuOpen.value = false
}
function handleScroll() {
  if (
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4
  ) {
    activeSection.value = 'contact'
    return
  }
  activeSection.value =
    [...navItems]
      .reverse()
      .find(
        (item) =>
          document.getElementById(item.id)?.getBoundingClientRect().top <= 132,
      )?.id || 'hero'
}
function handleKey(event) {
  if (event.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
    document.querySelector('.menu-toggle')?.focus()
  }
}
function handleResize() {
  if (window.innerWidth > 1040) closeMenu()
}
let previousOverflow = ''
watch(isMenuOpen, (open) => {
  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else document.body.style.overflow = previousOverflow
})
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKey)
  window.addEventListener('resize', handleResize)
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKey)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = previousOverflow
})
</script>
<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  background: rgba(244, 247, 251, 0.97);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: calc(var(--max-width) + 64px);
  padding: 0 32px;
  height: var(--nav-height);
  margin: auto;
  display: flex;
  align-items: center;
  gap: 36px;
}
.nav-logo {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}
.nav-logo span {
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 400;
  margin-left: 16px;
}
.nav-links {
  display: flex;
  margin-left: auto;
  gap: 24px;
}
.nav-links a {
  font-size: 13px;
  color: var(--text-secondary);
  white-space: nowrap;
}
.nav-links a[aria-current] {
  color: var(--accent);
  font-weight: 600;
}
.nav-socials {
  display: flex;
  gap: 18px;
}
.nav-socials a {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-primary);
  font-size: 12px;
}
.menu-toggle {
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  background: transparent;
  border: 0;
  color: var(--text-primary);
  border-radius: 6px;
  padding: 10px;
}
.menu-toggle:hover {
  background: var(--bg-secondary);
}
.mobile-menu {
  display: none;
}
@media (max-width: 1040px) {
  .nav-links,
  .nav-socials {
    display: none;
  }
  .nav-inner {
    justify-content: space-between;
  }
  .menu-toggle {
    display: grid;
  }
  .mobile-menu {
    display: flex;
    flex-direction: column;
    height: calc(100dvh - var(--nav-height));
    overflow-y: auto;
    padding: 20px 32px 40px;
    background: var(--bg-primary);
  }
  .mobile-menu > a {
    padding: 14px 0;
    color: var(--text-primary);
    border-bottom: 1px solid var(--border);
  }
  .mobile-menu a[aria-current] {
    color: var(--accent);
  }
  .mobile-socials {
    display: flex;
    gap: 28px;
    margin-top: 26px;
  }
}
@media (max-width: 760px) {
  .nav-inner {
    padding: 0 22px;
    gap: 12px;
  }
  .nav-logo span {
    margin-left: 12px;
  }
  .mobile-menu {
    padding: 20px 22px 40px;
  }
}
</style>
