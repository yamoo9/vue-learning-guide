<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue';
import TogglePasswordButton from './TogglePasswordButton.vue';

interface Props {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password';
}

const { id, label, type } = withDefaults(defineProps<Props>(), {
  type: 'text',
});

defineOptions({ inheritAttrs: false });

const attrs = useAttrs();

const model = defineModel();

const isShow = ref<boolean>(false);

const handleToggleIsShow = () => {
  isShow.value = !isShow.value;
};

const isPasswordType = computed(() => type === 'password');

const computedType = computed(() => {
  if (isPasswordType.value) {
    return isShow.value ? 'text' : 'password';
  } else {
    return type;
  }
});
</script>

<template>
  <div class="formControl">
    <label :for="id">{{ label }}</label>
    <input :type="computedType" :id="id" v-model="model" v-bind="attrs" />
    <TogglePasswordButton v-if="isPasswordType" :isShow="isShow" @toggle="handleToggleIsShow" />
  </div>
</template>

<style>
.formControl {
  position: relative;
  display: flex;
  flex-flow: column;
  gap: 4px;

  label {
    user-select: none;
    font-size: 12px;
  }

  input {
    inline-size: calc(100% - 0.8em);
    padding: 0.4em;
    background: transparent;
    border: 0;
    border-bottom: 0.5px solid #41b88366;
    color: #41b883;

    &:focus {
      outline: none;
      border-color: #41b883;
    }

    &::placeholder {
      color: #41b88377;
    }
  }
}
</style>
