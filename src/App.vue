<script setup lang="ts">
import { computed, ref } from 'vue';
import Navigation from '@/components/AppNavigation.vue';
import ComponentFundamentals from '@/views/ComponentFundamentals.vue';
import RegisterForm from '@/views/RegisterForm.vue';

const navigationList = ref<INavigationItem[]>([
  {
    id: 1,
    href: '/component',
    viewMode: 'component',
  },
  {
    id: 2,
    href: '/form',
    viewMode: 'form',
  },
]);

const renderView = ref<RenderView>('form');

const changeRenderView = (viewMode: RenderView) => {
  renderView.value = viewMode;
};

const handleChangeRenderView = (viewMode: RenderView, payload?: FormPayload) => {
  changeRenderView(viewMode === 'form' ? 'form' : 'component');
  if (payload) alert(JSON.stringify(payload, null, 2));
};

const render = computed(() => {
  const isComponentView = renderView.value.includes('component');
  return {
    component: isComponentView ? ComponentFundamentals : RegisterForm,
    eventHandlers: isComponentView ? {} : { changeRenderView: handleChangeRenderView },
  };
});
</script>

<template>
  <Navigation
    :list="navigationList"
    :renderView="renderView"
    @changeRenderView="handleChangeRenderView"
  ></Navigation>
  <KeepAlive :max="10">
    <component :is="render.component" v-on="render.eventHandlers"></component>
  </KeepAlive>
</template>
