<script setup lang="ts">
import { computed, ref, defineAsyncComponent } from 'vue';
import Navigation from '@/components/AppNavigation.vue';
import AppSpinner from '@/components/AppSpinner.vue';

const AsyncComponentFundamentals = defineAsyncComponent(
  () => import('@/views/ComponentFundamentals.vue')
);

const AsyncRegisterForm = defineAsyncComponent(
  () => import('@/views/RegisterForm.vue')
);

const AsyncPropsDrilling = defineAsyncComponent(
  () => import('@/views/PropsDrilling/PropsDrilling.vue')
);

const AsyncCustomDirective = defineAsyncComponent(
  () => import('@/views/CustomDirective.vue')
);

const AsyncAnimation = defineAsyncComponent(
  () => import('@/views/Animation.vue')
);

const AsyncTransition = defineAsyncComponent(
  () => import('@/views/Transition.vue')
);

const AsyncTransitionGroup = defineAsyncComponent(
  () => import('@/views/TransitionGroup.vue')
);

const navigationList = ref<INavigationItem[]>([
  {
    id: 1,
    href: '/',
    viewMode: 'home',
  },
  // {
  //   id: 2,
  //   href: '/form',
  //   viewMode: 'form',
  // },
  // {
  //   id: 3,
  //   href: '/props-drilling',
  //   viewMode: 'props drilling',
  // },
  // {
  //   id: 4,
  //   href: '/custom-directive',
  //   viewMode: 'custom directive',
  // },
  {
    id: 5,
    href: '/animation',
    viewMode: 'animation',
  },
  {
    id: 6,
    href: '/transition',
    viewMode: 'transition',
  },
  {
    id: 7,
    href: '/transition group',
    viewMode: 'transition group',
  },
]);

const renderView = ref<RenderView>('transition');

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
        component: AsyncComponentFundamentals,
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
    case 'animation':
      return {
        component: AsyncAnimation,
        eventHandlers: {},
      };
    case 'transition':
      return {
        component: AsyncTransition,
        eventHandlers: {},
      };
    case 'transition group':
      return {
        component: AsyncTransitionGroup,
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
