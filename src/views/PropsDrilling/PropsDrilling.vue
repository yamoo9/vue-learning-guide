<script setup lang="ts">
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import Parent from './Parent.vue';

useHead({
  title: () => '프롭스 드릴링 이슈 | Vue 러닝 가이드',
  meta: () => [
    {
      name: 'description',
      content:
        'Vue 컴포넌트 트리에서 특정 데이터를 공유하는 방법을 설명하고, 프롭스 드릴링 이슈을 구현하는 예시를 포함하고 있습니다.',
    },
  ],
});

const isShowChildren = ref(true);

const handleToggleIsShow = () => {
  isShowChildren.value = !isShowChildren.value;
};
</script>

<template>
  <div lang="en">
    <h1 class="headline" lang="ko-KR">프롭스 드릴링 이슈</h1>
    <Parent :isShow="isShowChildren" @toggle="handleToggleIsShow" />
  </div>
</template>

<style>
.headline {
  margin-block-end: 20px;
}
</style>
