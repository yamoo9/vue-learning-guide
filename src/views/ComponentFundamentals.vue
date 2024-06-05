<script setup lang="ts">
import { ref } from 'vue';
import AppDescription from '@/components/AppDescription.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import CountButton from '@/components/CountButton.vue';
import jsonData from '@/data/dummy.json';

const { headline, description, logos } = jsonData as unknown as IJsonData;

const count = ref<number>(0);
const handleIncrease = () => {
  count.value++;
  theme.value.primary = getRandomColor();
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const theme = ref<{ primary: string }>({ primary: '#41b883' });
</script>

<template>
  <AppHeadline :primary="theme.primary" :headline="headline" :logos="logos"></AppHeadline>
  <AppDescription :primary="theme.primary" :description="description"></AppDescription>
  <CountButton :primary="theme.primary" :count="count" @increase="handleIncrease">{{
    count
  }}</CountButton>
</template>
