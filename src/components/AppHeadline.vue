<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  headline: string;
  logos: {
    js: ILogo;
    vue: ILogo;
  };
}

const props = defineProps<Props>();

const computedHeadline = computed<string>(() => props.headline.replace(/javascript/i, 'ue'));

const showLogo = ref<boolean>(true);

setTimeout(() => {
  showLogo.value = false;
}, 1200);
</script>

<template>
  <h1>
    <img v-if="showLogo" :src="logos.vue.src" :height="logos.vue.size" alt="" />
    <b v-else>V</b>{{ computedHeadline }}
  </h1>
</template>
