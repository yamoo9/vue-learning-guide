<script setup lang="ts">
import { computed, ref, defineAsyncComponent, Suspense } from 'vue';
import navigationData from '@/data/navigation.json';
import Navigation from '@/components/AppNavigation.vue';
import AppSpinner from '@/components/AppSpinner.vue';

const renderView = ref<RenderView>('teleport');

const changeRenderView = (viewMode: RenderView) => {
  renderView.value = viewMode;
};

const handleChangeRenderView = (viewMode: RenderView, payload?: FormPayload) => {
  changeRenderView(viewMode === 'submitted' ? 'home' : viewMode);
  if (payload) alert(JSON.stringify(payload, null, 2));
};

const navigationList = ref<INavigationItem[]>(navigationData as INavigationItem[]);

const render = computed(() => {
  switch (renderView.value) {
    default:
    case 'home':
      return {
        component: defineAsyncComponent(() => import('@/views/ComponentFundamentals.vue')),
        eventHandlers: {},
      };
    case 'form':
      return {
        component: defineAsyncComponent(() => import('@/views/RegisterForm.vue')),
        eventHandlers: { changeRenderView: handleChangeRenderView },
      };
    case 'props drilling':
      return {
        component: defineAsyncComponent(() => import('@/views/PropsDrilling/PropsDrilling.vue')),
        eventHandlers: {},
      };
    case 'custom directive':
      return {
        component: defineAsyncComponent(() => import('@/views/CustomDirective.vue')),
        eventHandlers: {},
      };
    case 'animation':
      return {
        component: defineAsyncComponent(() => import('@/views/Animation.vue')),
        eventHandlers: {},
      };
    case 'transition':
      return {
        component: defineAsyncComponent(() => import('@/views/Transition.vue')),
        eventHandlers: {},
      };
    case 'transition group':
      return {
        component: defineAsyncComponent(() => import('@/views/TransitionGroup.vue')),
        eventHandlers: {},
      };
    case 'teleport':
      return {
        component: defineAsyncComponent(() => import('@/views/Teleport.vue')),
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
