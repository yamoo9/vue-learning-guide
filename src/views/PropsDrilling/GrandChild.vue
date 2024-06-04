<script setup lang="ts">
import { inject } from 'vue';
import WrapperBox from '@/components/WrapperBox.vue';
import useMouse from '@/composables/useMouse';
import { IIsShowChildren } from './PropsDrilling.vue';
import { isShowChildrenSymbol } from './symbolKeys';

const { isShow } = inject(isShowChildrenSymbol) as IIsShowChildren;

const mouse = useMouse();
</script>

<template>
  <WrapperBox ref="" title="Grand Child" color="#705af9" :style="`opacity: ${isShow ? 1 : 0}`">
    <p>x = {{ mouse.x }} / y = {{ mouse.y }}</p>
  </WrapperBox>
</template>
