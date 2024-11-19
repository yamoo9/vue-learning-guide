<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import AppDescription from '@/components/AppDescription.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import CountButton from '@/components/CountButton.vue';
import jsonData from '@/data/dummy.json';

useHead({
  title: () => '컴포넌트 펀더멘탈 | Vue 러닝 가이드',
  meta: () => [
    {
      name: 'description',
      content:
        'Vue.js의 컴포넌트 기초를 다루는 페이지입니다. 컴포넌트의 정의, props, emit, lifecycle hook, template ref 등에 대한 설명과 예제를 포함하고 있습니다.',
    },
  ],
});

const { headline, description, logos } = jsonData as unknown as IJsonData;

const count = ref<number>(0);
const handleIncrease = (): number => count.value++;
</script>

<template>
  <AppHeadline :headline="headline" :logos="logos"></AppHeadline>
  <AppDescription :description="description"></AppDescription>
  <CountButton :count="count" @increase="handleIncrease">{{
    count
  }}</CountButton>
</template>
