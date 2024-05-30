<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  count: number;
}

const props = withDefaults(defineProps<Props>(), {
  count: 0,
});

interface Emits {
  (e: 'increase'): void;
}

const emit = defineEmits<Emits>();

const count = computed(() => props.count);
const handleIncrease = () => emit('increase');
</script>

<template>
  <button type="button" class="button" @click="handleIncrease">
    {{ count }}
  </button>
</template>

<style>
.button {
  --size: 42px;

  cursor: pointer;
  block-size: var(--size);
  min-inline-size: var(--size);
  margin-block-end: 20px;
  border-radius: 4px;
  border: 1px solid currentColor;
  background: transparent;
  color: inherit;
  font-size: 32px;

  &:hover:not(:disabled) {
    background-color: #41b8832f;
  }
}
</style>
