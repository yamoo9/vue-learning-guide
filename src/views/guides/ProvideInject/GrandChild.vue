<script setup lang="ts">
import { inject } from 'vue';
import WrapperBox from '@/components/WrapperBox.vue';
import { toggleChildrenKey, type ToggleChildrenValue } from './injectionKeys';

const { isShow } = inject(toggleChildrenKey) as ToggleChildrenValue;
</script>

<template>
  <WrapperBox
    title="Grand Child"
    color="#705af9"
    :style="{ opacity: isShow ? 1 : 0 }"
  />
</template>
