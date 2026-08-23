<template>
  <NavHeader />
  <main>
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <OpenSourceSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<script setup>
import NavHeader from './components/NavHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>
