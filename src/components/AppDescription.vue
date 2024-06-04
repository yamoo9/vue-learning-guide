<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  description: string;
  primary?: string;
}

const props = defineProps<Props>();

const computedDescription = computed<string>(() =>
  props.description.replace(/javascript/i, 'vue').toUpperCase()
);
</script>

<template>
  <p>{{ computedDescription }}</p>
</template>

<style scoped>
p {
  color: v-bind(props.primary ?? '#41b883');
  transition: all 0.6s ease;
}
</style>
