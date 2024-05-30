<script setup lang="ts">
import { inject } from 'vue';
import WrapperBox from '@/components/WrapperBox.vue';
import type { IIsShowChildren } from './PropsDrilling.vue';
import { isShowChildrenSymbol } from './symbolKeys';

const { isShow } = inject(isShowChildrenSymbol) as IIsShowChildren;
</script>

<template>
  <WrapperBox title="Grand Child" color="#705af9" :style="`opacity: ${isShow ? 1 : 0}`" />
</template>
