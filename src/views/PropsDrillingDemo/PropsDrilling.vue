<script setup lang="ts">
import { ref } from 'vue';
import Parent from './Parent.vue';

// isShowChidren 상태를 하위 컴포넌트에 공급
const isShowChildren = ref(true);

// isShowChildren 상태를 바꾸는 함수
const handleToggleIsShow = () => {
  isShowChildren.value = !isShowChildren.value;
};

console.log(handleToggleIsShow);
</script>

<template>
  <div lang="en">
    <h1 class="headline" lang="ko-KR">프롭스 드릴링 이슈 (데모)</h1>
    <Parent />
  </div>
</template>

<style>
.headline {
  margin-block-end: 20px;
}
</style>
