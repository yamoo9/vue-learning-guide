<script setup lang="ts">
import { computed, ref, Suspense } from 'vue';
import Navigation from '@/components/AppNavigation.vue';
import AppSpinner from '@/components/AppSpinner.vue';
import routes, { type IRoute } from './routes';
import NotFound from '@/views/NotFound.vue';

let browserPath = globalThis.location.hash;

if (browserPath === '') {
  browserPath = '#/';
}

const currentPath = ref<string>(browserPath);

globalThis.location.hash = currentPath.value;

globalThis.addEventListener('hashchange', () => {
  currentPath.value = globalThis.location.hash;
});

const currentView = computed(() => {
  const currentRoute = routes.find((route: IRoute) => `#${route.path}` === currentPath.value);

  if (currentRoute) {
    return currentRoute.component;
  } else {
    return NotFound;
  }
});

console.log(currentView);
</script>

<template>
  <Navigation :list="routes" :currentPath="currentPath" />
  <KeepAlive :max="10">
    <Suspense timeout="0">
      <component :is="currentView" />
      <template #fallback>
        <AppSpinner />
      </template>
    </Suspense>
  </KeepAlive>
</template>
