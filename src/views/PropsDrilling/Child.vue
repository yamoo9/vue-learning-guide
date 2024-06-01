<script setup lang="ts">
import { inject } from 'vue';
import WrapperBox from '@/components/WrapperBox.vue';
import type { IIsShowChildren } from './PropsDrilling.vue';
import { isShowChildrenSymbol } from './symbolKeys';
import GrandChild from './GrandChild.vue';

const { isShow, toggle } = inject(isShowChildrenSymbol) as IIsShowChildren;
</script>

<template>
  <WrapperBox title="Child" color="#375fff">
    <button type="button" class="toggleButton" @click="toggle">
      {{ isShow ? 'Hide' : 'Show' }} Grand Child
    </button>
    <GrandChild />
    <GrandChild />
  </WrapperBox>
</template>

<style>
.toggleButton {
  scale: 0.9;
  cursor: pointer;
  user-select: none;
  position: absolute;
  z-index: 100;
  right: 24px;
  bottom: 24px;
  background: var(--color);
  border: 0;
  border-radius: 20px;
  padding: 0.6em 1.2em;
  color: #fff;
  box-shadow: 0 0 0 rgba(20, 20, 40, 0);
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    scale: 1;
    box-shadow: 0 4px 10px rgba(20, 20, 40, 0.8);
  }
}
</style>
