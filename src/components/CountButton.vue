<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  count: number;
  primary?: string;
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

<style scoped>
.button {
  --size: 42px;

  cursor: pointer;
  block-size: var(--size);
  min-inline-size: var(--size);
  margin-block-end: 20px;
  border-radius: 4px;
  border: 1px solid v-bind($props.primary ?? '#41b883');
  background: transparent;
  color: v-bind($props.primary ?? '#41b883');
  font-size: 32px;
  transition: all 0.6s ease;

  &:hover:not(:disabled) {
    background-color: color-mix(in srgb, v-bind($props.primary ?? '#41b883') 100%, #000 90%);
  }
}
</style>
