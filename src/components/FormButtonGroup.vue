<script setup lang="ts">
import { ref, toRefs } from 'vue';
import AppGroup from './AppGroup.vue';

interface Props {
  isAllInputed: boolean;
  isInputedOneOfThem: boolean;
  labelSubmit?: string;
  labelReset?: string;
}

const props = withDefaults(defineProps<Props>(), {
  labelSubmit: '회원가입',
  labelReset: '초기화',
});

const { isAllInputed, isInputedOneOfThem, labelSubmit, labelReset } = toRefs(props);

const submitButtonRef = ref<HTMLButtonElement | null>(null);
const resetButtonRef = ref<HTMLButtonElement | null>(null);

const handleClickSubmit = (e: MouseEvent) => {
  const submitButton = submitButtonRef.value;
  if (submitButton && submitButton.getAttribute('aria-disabled') === 'true') {
    e.preventDefault();
  }
};
</script>

<template>
  <AppGroup class="buttonGroup">
    <button
      ref="submitButtonRef"
      type="submit"
      @click="handleClickSubmit"
      :aria-disabled="!isAllInputed"
    >
      {{ labelSubmit }}
    </button>
    <button ref="resetButtonRef" type="reset" :aria-disabled="!isInputedOneOfThem">
      {{ labelReset }}
    </button>
  </AppGroup>
</template>

<style>
.buttonGroup {
  display: flex;
  justify-content: space-between;
  column-gap: 8px;

  button {
    cursor: pointer;
    flex: 1;
    border: 0;
    border-radius: 2px;
    padding: 0.6em;
    background: #41b883bb;
    color: #fff;

    &:hover:not(:disabled, [aria-disabled='true']) {
      background: #41b883;
    }

    &:disabled,
    &[aria-disabled='true'] {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
}
</style>
