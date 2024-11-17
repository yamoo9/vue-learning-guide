<script setup lang="ts">
import WrapperBox from '@/components/WrapperBox.vue';
import Child from './Child.vue';

// 상위 컴포넌트에서 전달된 props 정의

// 상위 컴포넌트에서 전달된 커스텀 이벤트 정의

</script>

<template>
  <WrapperBox title="Parent">
    <Child />
  </WrapperBox>
</template>
