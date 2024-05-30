<script setup lang="ts">
import { computed, ref } from 'vue';
import Navigation from '@/components/AppNavigation.vue';
import ComponentFundamentals from '@/views/ComponentFundamentals.vue';
import RegisterForm from '@/views/RegisterForm.vue';
import PropsDrilling from '@/views/PropsDrillingDemo/PropsDrilling.vue';

const navigationList = ref<INavigationItem[]>([
  {
    id: 1,
    href: '/',
    viewMode: 'home',
  },
  {
    id: 2,
    href: '/form',
    viewMode: 'form',
  },
  {
    id: 3,
    href: '/props-drilling',
    viewMode: 'props drilling',
  },
]);

const renderView = ref<RenderView>('props drilling');

const changeRenderView = (viewMode: RenderView) => {
  renderView.value = viewMode;
};

const handleChangeRenderView = (viewMode: RenderView, payload?: FormPayload) => {
  changeRenderView(viewMode === 'submitted' ? 'home' : viewMode);
  if (payload) alert(JSON.stringify(payload, null, 2));
};

const render = computed(() => {
  switch (renderView.value) {
    default:
    case 'home':
      return {
        component: ComponentFundamentals,
        eventHandlers: {},
      };
    case 'form':
      return {
        component: RegisterForm,
        eventHandlers: { changeRenderView: handleChangeRenderView },
      };
    case 'props drilling':
      return {
        component: PropsDrilling,
        eventHandlers: {},
      };
  }
});
</script>

<template>
  <Navigation
    :list="navigationList"
    :renderView="renderView"
    @changeRenderView="handleChangeRenderView"
  />
  <KeepAlive :max="10">
    <component :is="render.component" v-on="render.eventHandlers"></component>
  </KeepAlive>
</template>
