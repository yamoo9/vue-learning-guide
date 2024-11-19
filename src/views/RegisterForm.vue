<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import AppPre from '@/components/AppPre.vue';
import FormButtonGroup from '@/components/FormButtonGroup.vue';
import FormInput from '@/components/FormInput.vue';
import checkEmail from '@/utils/checkEmail';
import checkPassword from '@/utils/checkPassword';

interface Emits {
  (e: 'changeRenderView', view: RenderView, payload?: FormPayload): void;
}

const emit = defineEmits<Emits>();

const nameRef = ref<HTMLInputElement | null>(null);
const emailRef = ref<HTMLInputElement | null>(null);
const passwordRef = ref<HTMLInputElement | null>(null);
const passwordConfirmRef = ref<HTMLInputElement | null>(null);

const initialFormData: IFormData = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const formData = reactive<IFormData>({ ...initialFormData });

const isAllInputed = computed<boolean>(() =>
  Object.values(formData).every(Boolean)
);

const isInputedOneOfThem = computed<boolean>(() =>
  Object.values(formData).some(Boolean)
);

const handleSubmit = () => {
  const nameInput = nameRef.value;
  const emailInput = emailRef.value;
  const passwordInput = passwordRef.value;
  const passwordConfirmInput = passwordConfirmRef.value;

  const { name, email, password, passwordConfirm } = formData;

  if (name.length < 2) {
    nameInput?.select();
    return console.error('이름을 두글자 이상 입력하세요.');
  }

  if (!checkEmail(email)) {
    emailInput?.select();
    return console.error('이메일 주소가 올바르지 않습니다.');
  }

  if (!checkPassword(password)) {
    passwordInput?.select();
    return console.error(
      '패스워드는 숫자, 문자, 특수문자 조합 6자리 이상 입력해야 합니다.'
    );
  }

  if (password !== passwordConfirm) {
    passwordConfirmInput?.select();
    return console.error('패스워드와 패스워드 확인 값이 다릅니다.');
  }

  emit('changeRenderView', 'submitted', {
    name,
    email,
    password,
  });

  handleReset();
};

const handleReset = () => {
  for (const [key, value] of Object.entries(initialFormData)) {
    formData[key] = value;
  }
};
</script>

<template>
  <form
    class="form"
    novalidate
    @submit.prevent="handleSubmit"
    @reset.prevent="handleReset"
  >
    <FormInput
      ref="nameRef"
      id="userName"
      label="사용자 이름"
      placeholder="이름"
      v-model="formData.name"
    />
    <FormInput
      ref="emailRef"
      type="email"
      id="userEmail"
      label="이메일"
      placeholder="user@company.io"
      v-model="formData.email"
    />
    <FormInput
      ref="passwordRef"
      type="password"
      id="userPassword"
      label="패스워드"
      placeholder="문자,숫자,특수문자(@,!,$) 조합 6자리 이상"
      v-model="formData.password"
    />
    <FormInput
      ref="passwordConfirmRef"
      type="password"
      id="userPasswordConfirm"
      label="패스워드 확인"
      placeholder="입력한 패스워드 다시 입력"
      v-model="formData.passwordConfirm"
    />

    <FormButtonGroup
      :isAllInputed="isAllInputed"
      :isInputedOneOfThem="isInputedOneOfThem"
    />
  </form>
  <AppPre>{{ formData }}</AppPre>
</template>

<style>
.form {
  display: flex;
  flex-flow: column;
  gap: 24px;
  min-inline-size: 400px;
}
</style>
