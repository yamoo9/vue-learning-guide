<script setup lang="ts">
import WrapperBox from '@/components/WrapperBox.vue';
import useMouse from '@/composables/useMouse';
import Child from './Child.vue';

const mouse = useMouse(true);
</script>

<template>
  <WrapperBox title="Parent">
    <p>{{ mouse }}</p>
    <Child />
  </WrapperBox>
</template>
