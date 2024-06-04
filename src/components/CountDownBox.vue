<script setup lang="ts">
import { ref } from 'vue';

const count = ref<number>(10);

setInterval(() => {
  if (count.value > 0) {
    count.value -= 1;
  }
}, 900);
</script>

<template>
  <div class="box">
    <Transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <span :key="count" class="count">{{ count }}</span>
    </Transition>
  </div>
</template>

<style>
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

.box {
  min-inline-size: initial;
  border: 2px solid #41b883;
  border-radius: 4px;
  padding: 20px;
}

.count {
  display: inline-block;
  min-block-size: 100px;
  min-inline-size: 120px;
  padding-block-start: 12px;
  font-size: 80px;
  text-align: center;
}

.animate__animated {
  --animate-duration: 0.45s;
}
</style>
