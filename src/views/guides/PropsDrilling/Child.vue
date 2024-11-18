<script setup lang="ts">
import WrapperBox from '@/components/WrapperBox.vue';
import GrandChild from './GrandChild.vue';

// 상위 컴포넌트에서 전달된 props 정의
defineProps<{ isShow: boolean }>();

// 상위 컴포넌트에서 전달된 커스텀 이벤트 정의
const emit = defineEmits<{ (e: 'toggle'): void }>();
</script>

<template>
  <WrapperBox title="Child" color="#375fff">
    <button type="button" class="toggleButton" @click="emit('toggle')">Hide Grand Child</button>
    <GrandChild :isShow="isShow" />
    <GrandChild :isShow="isShow" />
  </WrapperBox>
</template>

<style>
.toggleButton {
  scale: 0.9;
  cursor: pointer;
  user-select: none;
  position: absolute;
  z-index: 100;
  right: 24px;
  bottom: 24px;
  background: var(--color);
  border: 0;
  border-radius: 20px;
  padding: 0.6em 1.2em;
  color: #fff;
  box-shadow: 0 0 0 rgba(20, 20, 40, 0);
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    scale: 1;
    box-shadow: 0 4px 10px rgba(20, 20, 40, 0.8);
  }
}
</style>
