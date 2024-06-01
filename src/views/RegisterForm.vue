<script setup lang="ts">
import useProfileUpload from '@/api/useProfileUpload';
import { computed, reactive, ref } from 'vue';
import sampleProfile from '@/assets/face-profile.webp';
import AppSpinner from '@/components/AppSpinner.vue';
import FormButtonGroup from '@/components/FormButtonGroup.vue';
import FormInput from '@/components/FormInput.vue';
import ProfileUpload from '@/components/ProfileUpload.vue';
import checkEmail from '@/utils/checkEmail';
import checkPassword from '@/utils/checkPassword';
import delay from '@/utils/delay';

interface Emits {
  (e: 'changeRenderView', view: RenderView, payload?: FormPayload): void;
}

const emit = defineEmits<Emits>();

interface IExposeValue {
  input: HTMLInputElement;
}

const nameRef = ref<IExposeValue | null>(null);
const emailRef = ref<IExposeValue | null>(null);
const passwordRef = ref<IExposeValue | null>(null);
const passwordConfirmRef = ref<IExposeValue | null>(null);
const profileImageRef = ref<IExposeValue | null>(null);

const initialFormData: IFormData = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  profileImage: sampleProfile,
};

const formData = reactive<IFormData>({ ...initialFormData });

const isAllInputed = computed<boolean>(() => Object.values(formData).every(Boolean));

const isInputedOneOfThem = computed<boolean>(() =>
  Object.values(formData).some((value) => {
    const { length } = value.trim();

    if (length > 0) {
      return value === sampleProfile ? false : true;
    } else {
      return false;
    }
  })
);

const isFormSubmmiting = ref<boolean>(false);

const handleSubmit = async () => {
  const nameInput = nameRef.value?.input;
  const emailInput = emailRef.value?.input;
  const passwordInput = passwordRef.value?.input;
  const passwordConfirmInput = passwordConfirmRef.value?.input;
  const profileImageInput = profileImageRef.value?.input;

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
    return console.error('패스워드는 숫자, 문자, 특수문자 조합 6자리 이상 입력해야 합니다.');
  }

  if (password !== passwordConfirm) {
    passwordConfirmInput?.select();
    return console.error('패스워드와 패스워드 확인 값이 다릅니다.');
  }

  const uploadProfileFile = profileImageInput?.files?.[0];

  if (uploadProfileFile) {
    const uploadForm = new FormData();
    uploadForm.append('image', uploadProfileFile);

    try {
      isFormSubmmiting.value = true;

      const { data } = await useProfileUpload<{
        data: {
          image: { url: string };
        };
      }>(uploadForm);

      await delay();

      isFormSubmmiting.value = false;

      const responseData = data.value;

      if (responseData) {
        formData.profileImage = responseData.data.image.url;
      }
    } catch (error) {
      console.error(error);
    }
  }

  emit('changeRenderView', 'submitted', {
    name,
    email,
    password,
    profileImage: formData.profileImage,
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
  <AppSpinner v-if="isFormSubmmiting" label="회원가입 요청 중..." />
  <form v-else class="form" novalidate @submit.prevent="handleSubmit" @reset.prevent="handleReset">
    <FormInput
      ref="nameRef"
      id="userName"
      label="이름"
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

    <ProfileUpload
      ref="profileImageRef"
      id="profileImage"
      :previewProfile="formData.profileImage"
      @change="formData.profileImage = $event"
    />

    <FormButtonGroup :isAllInputed="isAllInputed" :isInputedOneOfThem="isInputedOneOfThem" />
  </form>
</template>

<style>
.form {
  display: flex;
  flex-flow: column;
  gap: 24px;
  min-inline-size: 400px;
}
</style>
