<script setup lang="ts">
import TogglePasswordButton from '@/components/TogglePasswordButton.vue';
import { computed, reactive, ref } from 'vue';

interface Emits {
  (e: 'changeRenderView', view: RenderView, payload?: FormPayload): void;
}

const emit = defineEmits<Emits>();

const nameRef = ref<HTMLInputElement | null>(null);
const emailRef = ref<HTMLInputElement | null>(null);
const passwordRef = ref<HTMLInputElement | null>(null);
const passwordConfirmRef = ref<HTMLInputElement | null>(null);
const submitButtonRef = ref<HTMLButtonElement | null>(null);
const resetButtonRef = ref<HTMLButtonElement | null>(null);

const isShowPassword = ref<boolean>(false);

const handleToggleIsShowPassord = () => {
  isShowPassword.value = !isShowPassword.value;
};

const isShowPasswordConfirm = ref<boolean>(false);

const handleToggleIsShowPassordConfirm = () => {
  isShowPasswordConfirm.value = !isShowPasswordConfirm.value;
};

const changeInputType = (isInputTypeText: boolean) => {
  return isInputTypeText ? 'text' : 'password';
};

const initialFormData: IFormData = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const formData = reactive<IFormData>({ ...initialFormData });

const isAllInputed = computed<boolean>(() => Object.values(formData).every(Boolean));

const isInputedOneOfThem = computed<boolean>(() => Object.values(formData).some(Boolean));

const handleSubmit = () => {
  const nameInput = nameRef.value;
  const emailInput = emailRef.value;
  const passwordInput = passwordRef.value;
  const passwordConfirmInput = passwordConfirmRef.value;
  const submitButton = submitButtonRef.value;

  if (submitButton && submitButton.getAttribute('aria-disabled') === 'true') {
    return;
  }

  const { name, email, password, passwordConfirm } = formData;

  if (name.length < 2) {
    nameInput?.select();
    return console.error('이름을 두글자 이상 입력하세요.');
  }

  if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    emailInput?.select();
    return console.error('이메일 주소가 올바르지 않습니다.');
  }

  if (!/(?=.*\d)(?=.*[a-z])(?=.*(\\!|\\#|\\$|\\~|\\@|\\%|\\^|\\^|\\&|\\*)).{6,}/.test(password)) {
    passwordInput?.select();
    return console.error('패스워드는 숫자, 문자, 특수문자 조합 6자리 이상 입력해야 합니다.');
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
  const resetButton = resetButtonRef.value;
  if (resetButton && resetButton.getAttribute('aria-disabled') === 'true') {
    return;
  }

  for (const [key, value] of Object.entries(initialFormData)) {
    formData[key] = value;
  }

  isShowPassword.value = false;
  isShowPasswordConfirm.value = false;
};
</script>

<template>
  <form class="form" novalidate @submit.prevent="handleSubmit" @reset.prevent="handleReset">
    <div class="formControl">
      <label for="userName">사용자 이름</label>
      <input
        ref="nameRef"
        id="userName"
        name="name"
        type="text"
        placeholder="이름"
        v-model="formData.name"
      />
    </div>
    <div class="formControl">
      <label for="userEmail">이메일</label>
      <input
        ref="emailRef"
        id="userEmail"
        name="email"
        type="email"
        placeholder="user@company.io"
        v-model="formData.email"
      />
    </div>
    <div class="formControl">
      <label for="userPassword">패스워드</label>
      <input
        ref="passwordRef"
        id="userPassword"
        name="password"
        :type="changeInputType(isShowPassword)"
        placeholder="문자,숫자,특수문자(@,!,$) 조합 6자리 이상"
        v-model="formData.password"
      />
      <TogglePasswordButton
        :isShow="isShowPassword"
        @toggle="handleToggleIsShowPassord"
      ></TogglePasswordButton>
    </div>
    <div class="formControl">
      <label for="userPasswordConfirm">패스워드 확인</label>
      <input
        ref="passwordConfirmRef"
        id="userPasswordConfirm"
        name="passwordConfirm"
        :type="changeInputType(isShowPasswordConfirm)"
        placeholder="입력한 패스워드 다시 입력"
        v-model="formData.passwordConfirm"
      />
      <TogglePasswordButton
        :isShow="isShowPasswordConfirm"
        @toggle="handleToggleIsShowPassordConfirm"
      ></TogglePasswordButton>
    </div>
    <div class="buttonGroup" role="group">
      <button ref="submitButtonRef" type="submit" :aria-disabled="!isAllInputed">회원가입</button>
      <button ref="resetButtonRef" type="reset" :aria-disabled="!isInputedOneOfThem">초기화</button>
    </div>
  </form>
  <pre class="pre">{{ formData }}</pre>
</template>

<style>
.form {
  display: flex;
  flex-flow: column;
  gap: 24px;
  min-inline-size: 400px;
}

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

.pre {
  inline-size: 100%;
  margin-block-start: 40px;
  border-block: 0.5px solid #41b88388;
  padding: 24px 20px;
  background: #fff1;
  line-height: 1.5;
  letter-spacing: 0.07em;
}
</style>
