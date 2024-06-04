<script setup lang="ts">
import { ref, toRefs } from 'vue';
import _sampleProfile from '@/assets/face-profile.webp';

interface Props {
  id: string;
  previewProfile?: string;
}

const props = withDefaults(defineProps<Props>(), { previewProfile: _sampleProfile });
const { id, previewProfile } = toRefs(props);

interface Emits {
  (e: 'change', value: string): void;
}

const emit = defineEmits<Emits>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target.files) {
    const imageUrl = URL.createObjectURL(target.files[0]);
    emit('change', imageUrl);
  }
};

const inputRef = ref<HTMLInputElement | null>(null);

defineExpose({ input: inputRef });
</script>

<template>
  <div class="formControl profileUpload">
    <label :for="id">프로필 이미지</label>
    <input ref="inputRef" :id="id" type="file" accept=".jpg,.png,.webp" @change="handleChange" />
    <img :src="previewProfile" alt="" class="profileImage" />
  </div>
</template>

<style scoped>
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

.profileUpload {
  --size: 60px;
  --radius: 50%;
  --color: #58be90;

  position: relative;

  &:focus-within img {
    outline: 4px solid color-mix(in srgb, var(--color) 50%, #111 30%);
  }

  label {
    margin-block-end: 6px;
  }

  input[type='file'] {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    inline-size: var(--size);
    border-radius: var(--radius);
    block-size: var(--size);
    opacity: 0;
  }
}

.profileImage {
  inline-size: var(--size);
  block-size: var(--size);
  border-radius: var(--radius);
  background: var(--color);
  object-fit: cover;
}
</style>
