<script setup lang="ts">
import { provide, readonly, ref } from 'vue';
import { toggleChildrenKey } from './injectionKeys';
import Parent from './Parent.vue';

const isShowChildren = ref(true);

const handleToggleIsShow = () => {
  isShowChildren.value = !isShowChildren.value;
};

provide(toggleChildrenKey, {
  isShow: readonly(isShowChildren),
  toggle: handleToggleIsShow,
});
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
