<script setup lang="ts">
import WrapperBox from '@/components/WrapperBox.vue';

// 상위 컴포넌트에서 전달된 props 정의
defineProps<{ isShow: boolean }>();
</script>

<template>
  <WrapperBox title="Grand Child" color="#705af9" :style="{ opacity: isShow ? 1 : 0 }" />
</template>
