<script setup lang="ts">
import { ref } from 'vue';
import Parent from './Parent.vue';

const isShowChildren = ref<boolean>(true);

const handleToggleIsShow = () => {
  isShowChildren.value = !isShowChildren.value;
};
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
