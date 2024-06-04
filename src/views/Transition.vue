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

<style scoped>
.transitionDemo {
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  min-block-size: 200px;
  min-inline-size: 100vh;

  .button {
    cursor: pointer;
    user-select: none;
    font-size: 12px;
    background: #41b883;
    color: #fff;
    border: 0;
    padding: 2px 20px;
    border-radius: 4px;
    text-transform: uppercase;

    &:hover:not(:disabled) {
      background: #28d989;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.45;
    }
  }
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
