<script setup lang="ts">
import vueLogo from '@/assets/vue.svg';
</script>

<template>
  <main class="transitionDemo" lang="en">
    <button type="button" class="button">Hide</button>
    <div class="box">
      <img :src="vueLogo" alt="Vue.js logo" height="60" />
    </div>
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
}

.count {
  display: inline-block;
  min-block-size: 100px;
  min-inline-size: 120px;
  padding-block-start: 12px;
  font-size: 80px;
  text-align: center;
}
</style>
