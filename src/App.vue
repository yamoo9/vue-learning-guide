<script setup lang="ts">
import { computed, ref, defineAsyncComponent, Suspense } from 'vue';
import Navigation from '@/components/AppNavigation.vue';
import AppSpinner from '@/components/AppSpinner.vue';

const ComponentFundamentals = defineAsyncComponent(
  () => import('@/views/ComponentFundamentals.vue')
);

const RegisterForm = defineAsyncComponent(
  () => import('@/views/RegisterForm.vue')
);

const PropsDrilling = defineAsyncComponent(
  () => import('@/views/PropsDrilling/PropsDrilling.vue')
);

const ProvideInject = defineAsyncComponent(
  () => import('@/views/ProvideInject/ProvideInject.vue')
);

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
    href: '/provide-inject',
    viewMode: 'provide inject',
  },
  {
    id: 4,
    href: '/props-drilling',
    viewMode: 'props drilling',
  },
]);

const renderView = ref<RenderView>('home');

const changeRenderView = (viewMode: RenderView) => {
  renderView.value = viewMode;
};

const handleChangeRenderView = (
  viewMode: RenderView,
  payload?: FormPayload
) => {
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
    case 'provide inject':
      return {
        component: ProvideInject,
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
