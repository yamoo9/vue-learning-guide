<script setup lang="ts">
import WrapperBox from '@/components/WrapperBox.vue';
import Child from './Child.vue';
import { toRefs } from 'vue';

interface Props {
  isShow?: boolean;
}

const props = withDefaults(defineProps<Props>(), { isShow: false });
const { isShow } = toRefs(props);

interface Emits {
  (e: 'toggle'): void;
}

const emit = defineEmits<Emits>();
</script>

<template>
  <WrapperBox title="Parent">
    <Child :isShow="isShow" @toggle="emit('toggle')" />
  </WrapperBox>
</template>
