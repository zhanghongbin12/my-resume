<template>
  <aside class="overview no-print" aria-label="代表项目速览">
    <div class="overview-heading">
      <h2>项目速览</h2>
      <span>工作内容示意</span>
    </div>
    <div class="overview-options" role="group" aria-label="选择速览项目">
      <button
        v-for="(item, index) in projectOverviews"
        :key="item.id"
        :aria-pressed="selectedIndex === index"
        aria-controls="overview-content"
        @click="selectedIndex = index"
      >
        {{ item.label }}
      </button>
    </div>
    <div
      id="overview-content"
      class="overview-content"
      aria-live="polite"
      aria-atomic="true"
    >
      <h3>{{ selected.title }}</h3>
      <ol class="workflow">
        <li v-for="(step, index) in selected.steps" :key="step.title">
          <div class="step-symbol" aria-hidden="true">
            <svg v-if="selectedIndex === 0" viewBox="0 0 48 48" fill="none">
              <template v-if="index === 0">
                <rect x="7" y="7" width="14" height="14" rx="3" />
                <rect x="27" y="7" width="14" height="14" rx="3" />
                <rect x="7" y="27" width="14" height="14" rx="3" />
                <path d="M27 34h14m-7-7v14" />
              </template>
              <template v-else-if="index === 1">
                <path
                  d="M17 12h-5v24h5m14-24h5v24h-5M21 19l-5 5 5 5m6-10 5 5-5 5"
                />
              </template>
              <template v-else>
                <rect x="6" y="9" width="36" height="28" rx="3" />
                <path d="M6 17h36M20 42h8m-4-5v5M12 13h1m4 0h1" />
              </template>
            </svg>
            <svg v-else viewBox="0 0 48 48" fill="none">
              <template v-if="index === 0">
                <path d="M8 9h32v30H8zM8 18h32M8 28h32M19 9v30" />
              </template>
              <template v-else-if="index === 1">
                <path d="M7 8v32h35M14 30l9-11 8 5 10-13" />
                <path d="M35 11h6v6" />
              </template>
              <template v-else>
                <rect x="6" y="8" width="36" height="29" rx="4" />
                <path d="m16 37-5 5v-5M13 17h22m-22 7h16m-16 6h10" />
              </template>
            </svg>
          </div>
          <strong>{{ step.title }}</strong
          ><span>{{ step.detail }}</span>
        </li>
      </ol>
      <div class="overview-footer">
        <p>{{ selected.summary }}</p>
        <a :href="`#${selected.id}`">阅读项目经历</a>
      </div>
    </div>
  </aside>
</template>
<script setup>
import { computed, ref } from 'vue'
import { projectOverviews } from '../data/resume.js'
const selectedIndex = ref(0)
const selected = computed(() => projectOverviews[selectedIndex.value])
</script>
<style scoped>
.overview {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 28px;
  box-shadow: 0 18px 48px -32px rgba(41, 90, 199, 0.3);
}
.overview-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 24px;
}
.overview-heading h2 {
  font-size: 15px;
  font-weight: 600;
}
.overview-heading > span {
  color: var(--text-secondary);
  font-size: 11px;
}
.overview-options {
  display: flex;
  padding: 4px;
  border-radius: 8px;
  background: var(--bg-primary);
  gap: 4px;
}
.overview-options button {
  flex: 1;
  min-width: 0;
  padding: 9px 10px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--text-secondary);
  font-size: 13px;
  transition:
    color 0.2s,
    background 0.2s;
}
.overview-options button[aria-pressed='true'] {
  color: var(--accent);
  background: #fff;
  box-shadow: 0 1px 4px #18283b0d;
  font-weight: 600;
}
.overview-content {
  padding-top: 26px;
}
h3 {
  font-size: 22px;
  letter-spacing: -0.02em;
  font-weight: 600;
}
.workflow {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style: none;
  gap: 20px;
  margin: 28px 0;
}
.workflow li {
  position: relative;
  text-align: center;
}
.workflow li:not(:last-child)::after {
  content: '';
  width: 20px;
  height: 1px;
  position: absolute;
  right: -20px;
  top: 35px;
  background: #c6d6ee;
}
.step-symbol {
  width: 70px;
  height: 70px;
  border-radius: 12px;
  background: #edf3fd;
  display: grid;
  place-items: center;
  margin: 0 auto 14px;
}
.step-symbol svg {
  width: 38px;
  height: 38px;
  stroke: var(--accent);
  stroke-width: 1.6;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.workflow strong {
  display: block;
  font-size: 13px;
  font-weight: 500;
}
.workflow li > span {
  font-size: 11px;
  color: var(--text-secondary);
  display: block;
  margin-top: 3px;
}
.overview-footer {
  border-top: 1px solid var(--border);
  padding-top: 19px;
}
.overview-footer p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.8;
  min-height: 47px;
}
.overview-footer a {
  display: inline-block;
  font-size: 12px;
  margin-top: 12px;
  text-decoration: underline;
}
@media (max-width: 760px) {
  .overview {
    padding: 20px;
    border-radius: 12px;
  }
  .overview-heading {
    margin-bottom: 16px;
  }
  .overview-options button {
    min-height: 44px;
    padding: 8px 4px;
    font-size: 12px;
  }
  .overview-content {
    padding-top: 18px;
  }
  .workflow {
    gap: 12px;
    margin: 20px 0;
  }
  .step-symbol {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    border-radius: 9px;
  }
  .step-symbol svg {
    width: 30px;
    height: 30px;
  }
  .workflow li:not(:last-child)::after {
    width: 12px;
    right: -12px;
    top: 25px;
  }
  .workflow strong {
    font-size: 12px;
  }
  .workflow li > span {
    font-size: 10px;
  }
  h3 {
    font-size: 18px;
    line-height: 1.5;
  }
  .overview-footer {
    padding-top: 14px;
  }
}
</style>
