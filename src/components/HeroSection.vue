<template>
  <section id="hero" class="hero">
    <div class="section-inner hero-layout">
      <div class="hero-copy">
        <div class="identity">
          <img
            v-if="profile.avatar"
            :src="avatarSrc"
            :alt="`${profile.name}的个人照片`"
            width="76"
            height="86"
          />
          <div>
            <p class="name-en">{{ profile.nameEn }}</p>
            <h1>{{ profile.name }}</h1>
          </div>
        </div>
        <p class="hero-role">{{ profile.title }}</p>
        <p class="hero-specialty">低代码平台与<br />数据可视化开发</p>
        <p class="hero-description">
          10 年以上前端开发经验，主要使用 React、TypeScript 和 Vue。近期参与
          Popcorn 与慧眼，负责编辑器扩展、复杂数据展示和页面性能优化。
        </p>
        <div class="hero-actions no-print">
          <a class="button" href="#projects">查看项目经历</a
          ><a href="#contact" class="hero-contact">联系我</a>
        </div>
        <div class="hero-meta">
          <span>{{ profile.location }}</span
          ><span>期待新的工作机会</span
          ><button class="print-button no-print" @click="printResume">
            打印简历
          </button>
        </div>
      </div>
      <ProjectOverview />
    </div>
  </section>
</template>
<script setup>
import { profile } from '../data/resume.js'
import ProjectOverview from './ProjectOverview.vue'
const avatarSrc = `${import.meta.env.BASE_URL}head.jpg`
const printResume = () => window.print()
</script>
<style scoped>
.hero {
  padding-top: calc(var(--nav-height) + 66px);
  padding-bottom: 60px;
}
.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 78px;
  align-items: center;
}
.identity {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}
.identity img {
  object-fit: cover;
  object-position: center 25%;
  border-radius: 9px;
}
.name-en {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 2px;
}
h1 {
  font-size: 40px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.04em;
}
.hero-role {
  color: var(--text-secondary);
  font-size: 15px;
  margin-bottom: 10px;
}
.hero-specialty {
  font-size: clamp(28px, 3.1vw, 38px);
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.03em;
}
.hero-description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.95;
  margin-top: 22px;
  max-width: 430px;
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 28px;
}
.hero-contact {
  font-size: 14px;
  text-decoration: underline;
}
.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  align-items: center;
  margin-top: 28px;
  font-size: 12px;
  color: var(--text-secondary);
}
.print-button {
  border: 0;
  background: none;
  color: var(--text-secondary);
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 4px;
}
@media (max-width: 960px) {
  .hero-layout {
    gap: 32px;
  }
}
@media (max-width: 760px) {
  .hero {
    padding-top: calc(var(--nav-height) + 24px);
    padding-bottom: 32px;
  }
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .identity {
    gap: 16px;
    margin-bottom: 16px;
  }
  .identity img {
    width: 60px;
    height: 68px;
  }
  h1 {
    font-size: 30px;
  }
  .name-en {
    font-size: 12px;
  }
  .hero-role {
    font-size: 13px;
    margin-bottom: 8px;
  }
  .hero-specialty {
    font-size: 26px;
    line-height: 1.45;
  }
  .hero-description {
    max-width: none;
    margin-top: 14px;
    line-height: 1.8;
  }
  .hero-actions {
    margin-top: 20px;
    gap: 24px;
  }
  .hero-meta {
    margin-top: 16px;
    gap: 8px 18px;
  }
  .print-button {
    display: none;
  }
}
@media print {
  .hero {
    padding: 0 0 20px;
  }
  .hero-layout {
    display: block;
  }
  .hero-specialty {
    display: none;
  }
  .hero-description {
    max-width: none;
  }
  .hero-role {
    margin-bottom: 0;
  }
  .identity {
    margin-bottom: 10px;
  }
  .hero-meta {
    margin-top: 12px;
  }
}
</style>
