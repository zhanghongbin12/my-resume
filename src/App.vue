<template>
  <a class="skip-link no-print" href="#main-content">跳到简历内容</a>
  <NavHeader />
  <main id="main-content" tabindex="-1">
    <HeroSection />
    <ProjectsSection />
    <ExperienceSection />
    <OpenSourceSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
let closedDetails = []
function beforePrint() {
  closedDetails = [...document.querySelectorAll('details:not([open])')]
  closedDetails.forEach((element) => {
    element.open = true
  })
}
function afterPrint() {
  closedDetails.forEach((element) => {
    element.open = false
  })
  closedDetails = []
}
onMounted(() => {
  window.addEventListener('beforeprint', beforePrint)
  window.addEventListener('afterprint', afterPrint)
})
onUnmounted(() => {
  window.removeEventListener('beforeprint', beforePrint)
  window.removeEventListener('afterprint', afterPrint)
})

import NavHeader from './components/NavHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>
