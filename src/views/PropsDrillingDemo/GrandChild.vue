<script setup lang="ts">
import { toRefs } from 'vue';
import WrapperBox from '@/components/WrapperBox.vue';

interface Props {
  isShow?: boolean;
}

const props = withDefaults(defineProps<Props>(), { isShow: false });
const { isShow } = toRefs(props);
</script>

<template>
  <WrapperBox
    title="Grand Child"
    color="#705af9"
    :style="`opacity: ${isShow ? 1 : 0}`"
  ></WrapperBox>
</template>
