<script setup lang="ts">
import { ref } from 'vue';
import CountDownBox from '@/components/CountDownBox.vue';

const retry = ref<number>(0);
</script>

<template>
  <main class="transitionDemo" lang="en">
    <button type="button" class="button" @click="retry++">change key</button>
    <Transition mode="out-in">
      <CountDownBox :key="retry" />
    </Transition>
  </main>
</template>

<style>
.transitionDemo {
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  min-block-size: 200px;
  min-inline-size: 100vh;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
