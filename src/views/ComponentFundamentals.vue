<script setup lang="ts">
import { ref } from 'vue';
import AppDescription from '@/components/AppDescription.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import CountButton from '@/components/CountButton.vue';
import jsonData from '@/data/dummy.json';

const { headline, description, logos } = jsonData as unknown as IJsonData;

const count = ref<number>(0);
const handleIncrease = (): number => count.value++;
</script>

<template>
  <AppHeadline :headline="headline" :logos="logos"></AppHeadline>
  <AppDescription :description="description"></AppDescription>
  <CountButton :count="count" @increase="handleIncrease">{{ count }}</CountButton>
</template>
