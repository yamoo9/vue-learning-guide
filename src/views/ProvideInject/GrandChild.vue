<script setup lang="ts">
import { inject } from 'vue';
import { type IsShowChildren, isShowChildrenSymbol } from './symbolKeys';
import WrapperBox from '@/components/WrapperBox.vue';
import useMouse from '@/composables/useMouse';

const { isShow } = inject(isShowChildrenSymbol) as IsShowChildren;

const mouse = useMouse();
</script>

<template>
  <WrapperBox
    ref=""
    title="Grand Child"
    color="#705af9"
    :style="`opacity: ${isShow ? 1 : 0}`"
  >
    <p>x = {{ mouse.x }} / y = {{ mouse.y }}</p>
  </WrapperBox>
</template>
