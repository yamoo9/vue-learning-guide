<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useHead } from '@unhead/vue';
import AppPre from '@/components/AppPre.vue';
import FormButtonGroup from '@/components/FormButtonGroup.vue';
import FormInput from '@/components/FormInput.vue';
import checkPassword from '@/utils/checkPassword';
import checkEmail from '@/utils/checkEmail';

interface IExportInput {
  input: HTMLInputElement | null;
}

interface Emits {
  (e: 'changeRenderView', view: RenderView, payload?: FormPayload): void;
}

const emit = defineEmits<Emits>();

const nameRef = ref<IExportInput>({ input: null });
const emailRef = ref<IExportInput>({ input: null });
const passwordRef = ref<IExportInput>({ input: null });
const passwordConfirmRef = ref<IExportInput>({ input: null });

// ProfileUpload의 <input> 참조


const initialFormData: IFormData = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const formData: IFormData = reactive({ ...initialFormData });

const isAllInputed = computed(() => Object.values(formData).every(Boolean));

const isInputedOneOfThem = computed(() => {
  const formDataWithoutProfileImage = Object.fromEntries(
    Object.entries(formData).filter(([key]) => !key.includes('profile'))
  );

  return Object.values(formDataWithoutProfileImage).some(Boolean);
});

// 비동기 함수로 변경
const handleSubmit = () => {
  const nameInput = nameRef.value?.input;
  const emailInput = emailRef.value?.input;
  const passwordInput = passwordRef.value?.input;
  const passwordConfirmInput = passwordConfirmRef.value?.input;
  
  // 프로필 이미지 <input> 요소 참조

  // 업로드 할 프로필 이미지 파일 참조
  
  // 업로드 할 프로필 이미지 파일 참조가 있을 경우
    // 업로드 폼 데이터 생성
    // 업로드 폼 데이터에 image 추가
      // 프로필 이미지 업로드 요청
      // 응답 결과에서 데이터 추출
      // formData.profileImage 속성에 데이터의 이미지 경로 설정


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
    formData[key as keyof IFormData] = value;
  }
};

useHead({
  title: () => '회원가입 | Vue 러닝 가이드',
  meta: () => [
    {
      name: 'description',
      content:
        'Vue.js 웹 애플리케이션에서 회원가입 폼을 구현하는 예시입니다. 이 페이지에서는 회원가입 폼을 구현하고, 검증을 통해 사용자 이름, 이메일, 패스워드를 입력할 수 있습니다.',
    },
  ],
});
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
      label="사용자 이름"
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

    <!-- ProfileUpload 삽입 -->


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
