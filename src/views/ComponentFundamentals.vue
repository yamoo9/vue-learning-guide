<script setup lang="ts">
import { onActivated, onDeactivated, ref } from 'vue';
import jsonData from '@/data/dummy.json';
import AppDescription from '@/components/AppDescription.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import AppButton from '@/components/AppButton.vue';

const { headline, description, logos } = jsonData as unknown as IJsonData;

const count = ref<number>(0);
const handleIncrease = (): number => count.value++;

onActivated(() => {
  // console.log('activated');
});

onDeactivated(() => {
  // console.log('deactivated');
});
</script>

<template>
  <AppHeadline :headline="headline" :logos="logos"></AppHeadline>
  <AppDescription :description="description"></AppDescription>
  <AppButton :count="count" @increase="handleIncrease">{{ count }}</AppButton>
</template>
