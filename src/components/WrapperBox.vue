<script setup lang="ts">
interface Props {
  title: string;
  color?: string;
}

const { title, color } = withDefaults(defineProps<Props>(), { color: '#41b883' });
</script>

<template>
  <div class="box" :style="`--color: ${color}`">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.box {
  --color: #41b883;
  --padding: 40px;
  --radius: 4px;

  position: relative;
  margin-block-end: 20px;
  border: 2px solid var(--color);
  border-radius: var(--radius);
  padding: var(--padding);
  min-inline-size: 300px;
  color: var(--color);
  background-color: color-mix(in srgb, var(--color) 10%, white 0.5%);

  &:last-child {
    margin-block-end: 0;
  }

  h2 {
    position: absolute;
    top: 12px;
    left: 12px;
    margin: 0;
    font-size: 16px;
  }

  p {
    font-size: 42px;
  }

  :slotted(p) {
    font-size: 42px;
  }
}
</style>
