<script setup lang="ts">
import { Ref, provide } from 'vue';
import Parent from './Parent.vue';
import { isShowChildrenSymbol } from './symbolKeys';
import useIsShow from '@/composables/useIsShow';

export interface IIsShowChildren {
  isShow: Readonly<Ref<boolean>>;
  toggle: () => void;
}

provide<IIsShowChildren>(isShowChildrenSymbol, useIsShow(true));
</script>

<template>
  <div lang="en">
    <h1 class="headline" lang="ko-KR">프롭스 드릴링 이슈</h1>
    <Parent />
  </div>
</template>

<style>
.headline {
  margin-block-end: 20px;
}
</style>
