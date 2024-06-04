<script setup lang="ts">
import gsap from 'gsap';

const handleBeforeEnter = (el: Element) => {
  gsap.set(el, {
    x: -200,
    y: -200,
    opacity: 0,
  });
};

const handleEnter = (el: Element, done: () => void) => {
  gsap.to(el, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'elastic.inOut(0.1, 1)',
    onComplete: done,
  });
};

const handeLeave = (el: Element, done: () => void) => {
  gsap.to(el, {
    x: 200,
    y: -200,
    opacity: 0,
    duration: 0.6,
    ease: 'elastic.inOut(0.1, 1)',
    onComplete: done,
  });
};
</script>

<template>
  <Transition
    appear
    mode="out-in"
    :css="false"
    @before-enter="handleBeforeEnter"
    @enter="handleEnter"
    @leave="handeLeave"
  >
    <slot></slot>
  </Transition>
</template>
