<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  label: string;
  openText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  openText: 'Open',
});

const isOpen = ref<boolean>(false);

watch(isOpen, (value) => {
  const rootElement = document.documentElement;
  if (value) {
    rootElement.style.overflow = 'hidden';
  } else {
    rootElement.style.overflow = 'auto';
  }
});
</script>

<template>
  <button type="button" class="button" aria-haspopup="dialog" @click="isOpen = true">
    {{ props.openText }}
  </button>
  <article v-if="isOpen" class="dialog" :aria-label="props.label" aria-modal="true">
    <div class="dialog__head">
      <slot name="head">
        <h2>{{ props.label }}</h2>
      </slot>
    </div>
    <div class="dialog__body">
      <slot></slot>
    </div>
    <button type="button" class="dialog__close" @click="isOpen = false">
      <svg
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
      </svg>
    </button>
  </article>
  <div v-if="isOpen" class="dialog__backdrop" @click="isOpen = false"></div>
</template>

<style>
.dialog {
  overflow: hidden;
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  background: #41b883;
  color: #fff;
  inline-size: clamp(420px, 90vw, 590px);
  block-size: clamp(360px, 50vh, 420px);

  display: flex;
  flex-flow: column;

  > * * {
    margin-block: 0;
  }

  .dialog__head {
    border-block-end: 0.5px solid #36996c;
    padding: 16px 20px;
  }

  .dialog__body {
    flex: 1;
    border-block-end: 0.5px solid #36996c;
    padding: 16px 20px;
  }

  .dialog__close {
    cursor: pointer;
    user-select: none;
    position: fixed;
    top: 14px;
    right: 14px;
    border: 0;
    border-radius: 6px;
    padding: 4px;
    background: none;
    color: #fff;
    line-height: 1;

    display: grid;
    place-content: center;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    svg {
      inline-size: 24px;
      block-size: 24px;
    }
  }
}

.dialog__backdrop {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}
</style>
