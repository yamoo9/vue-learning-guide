import { Component, defineAsyncComponent } from 'vue';

export interface IRoute {
  path: string;
  component: Component;
}

const routes: IRoute[] = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('@/views/ComponentFundamentals.vue')),
  },
  {
    path: '/form',
    component: defineAsyncComponent(() => import('@/views/RegisterForm.vue')),
  },
  {
    path: '/props-drilling',
    component: defineAsyncComponent(() => import('@/views/PropsDrilling/PropsDrilling.vue')),
  },
  {
    path: '/custom-directive',
    component: defineAsyncComponent(() => import('@/views/CustomDirective.vue')),
  },
  {
    path: '/animation',
    component: defineAsyncComponent(() => import('@/views/Animation.vue')),
  },
  {
    path: '/transition',
    component: defineAsyncComponent(() => import('@/views/Transition.vue')),
  },
  {
    path: '/transition-group',
    component: defineAsyncComponent(() => import('@/views/TransitionGroup.vue')),
  },
  {
    path: '/teleport',
    component: defineAsyncComponent(() => import('@/views/Teleport.vue')),
  },
];

export default routes;
