<script setup lang="ts">
import { computed, ref, defineAsyncComponent, Suspense } from 'vue';
import Navigation from '@/components/AppNavigation.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import ComponentFundamentals from '@/views/ComponentFundamentals.vue';

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
  {
    id: 4,
    href: '/custom-directive',
    viewMode: 'custom directive',
  },
]);

const renderView = ref<RenderView>('custom directive');

const changeRenderView = (viewMode: RenderView) => {
  renderView.value = viewMode;
};

const handleChangeRenderView = (viewMode: RenderView, payload?: FormPayload) => {
  changeRenderView(viewMode === 'submitted' ? 'home' : viewMode);
  if (payload) alert(JSON.stringify(payload, null, 2));
};

const AsyncRegisterForm = defineAsyncComponent(() => import('@/views/RegisterForm.vue'));
const AsyncPropsDrilling = defineAsyncComponent(
  () => import('@/views/PropsDrilling/PropsDrilling.vue')
);
const AsyncCustomDirective = defineAsyncComponent(() => import('@/views/CustomDirective.vue'));

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
        component: AsyncRegisterForm,
        eventHandlers: { changeRenderView: handleChangeRenderView },
      };
    case 'props drilling':
      return {
        component: AsyncPropsDrilling,
        eventHandlers: {},
      };
    case 'custom directive':
      return {
        component: AsyncCustomDirective,
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
    <Suspense timeout="0">
      <component :is="render.component" v-on="render.eventHandlers" />
      <template #fallback>
        <AppSpinner />
      </template>
    </Suspense>
  </KeepAlive>
</template>
