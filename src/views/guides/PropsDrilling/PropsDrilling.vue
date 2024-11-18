<script setup lang="ts">
import { ref } from 'vue';
import Parent from './Parent.vue';

const isShowChildren = ref(true);

const handleToggleIsShow = () => {
  isShowChildren.value = !isShowChildren.value;
};
</script>

<template>
  <div lang="en">
    <h1 class="headline" lang="ko-KR">프롭스 드릴링 이슈 (데모)</h1>
    <Parent :isShow="isShowChildren" @toggle="handleToggleIsShow" />
  </div>
</template>

<style>
.headline {
  margin-block-end: 20px;
}
</style>
