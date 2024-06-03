<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  description: string;
}

const props = defineProps<Props>();

const computedDescription = computed<string>(() =>
  props.description.replace(/javascript/i, 'vue').toUpperCase()
);
</script>

<template>
  <p>{{ computedDescription }}</p>
</template>
