<script setup lang="ts">
const { label } = withDefaults(defineProps<{ label?: string }>(), { label: '데이터 로딩 중...' });
</script>

<template>
  <svg role="img" :aria-label="label" viewBox="0 0 200 200">
    <circle fill="#58BE90" stroke="#58BE90" stroke-width="6" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin="0"
      ></animate>
    </circle>
    <circle fill="#58BE90" stroke="#58BE90" stroke-width="6" opacity=".8" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin="0.05"
      ></animate>
    </circle>
    <circle fill="#58BE90" stroke="#58BE90" stroke-width="6" opacity=".6" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin=".1"
      ></animate>
    </circle>
    <circle fill="#58BE90" stroke="#58BE90" stroke-width="6" opacity=".4" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin=".15"
      ></animate>
    </circle>
    <circle fill="#58BE90" stroke="#58BE90" stroke-width="6" opacity=".2" r="15" cx="35" cy="100">
      <animate
        attributeName="cx"
        calcMode="spline"
        dur="2"
        values="35;165;165;35;35"
        keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
        repeatCount="indefinite"
        begin=".2"
      ></animate>
    </circle>
  </svg>
</template>

<style>
[role='img'] {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  inline-size: 120px;
  block-size: 120px;
  transform: translate(-50%, -50%);
}
</style>
