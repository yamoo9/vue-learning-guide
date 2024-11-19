<script setup lang="ts">
import { provide } from 'vue';
import { useHead } from '@unhead/vue';
import Parent from './Parent.vue';
import useIsShow from '@/composables/useIsShow';
import { isShowChildrenSymbol } from './symbolKeys';

useHead({
  title: () => '프로바이드 & 인젝트 | Vue 러닝 가이드',
  meta: () => [
    {
      name: 'description',
      content:
        'Vue 컴포넌트 트리에서 특정 데이터를 공유하는 방법을 설명하고 있습니다.',
    },
  ],
});

provide(isShowChildrenSymbol, useIsShow());
</script>

<template>
  <div lang="en">
    <h1 class="headline" lang="ko-KR">프로바이드 &amp; 인젝트</h1>
    <Parent />
  </div>
</template>

<style>
.headline {
  margin-block-end: 20px;
}
</style>
