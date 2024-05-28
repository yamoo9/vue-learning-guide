import { ref, reactive, computed } from 'vue';
import TogglePasswordButton from '../components/TogglePasswordButton';
import '../styles/forms.css';

export default {
  components: {
    TogglePasswordButton,
  },
  emits: ['changeRenderView'],
  setup(_, { emit }) {
    const nameRef = ref(null);
    const emailRef = ref(null);
    const passwordRef = ref(null);
    const passwordConfirmRef = ref(null);
    const submitButtonRef = ref(null);
    const resetButtonRef = ref(null);

    const isShowPassword = ref(false);
    const handleToggleIsShowPassord = () => {
      isShowPassword.value = !isShowPassword.value;
    };

    const isShowPasswordConfirm = ref(false);
    const handleToggleIsShowPassordConfirm = () => {
      console.log(isShowPasswordConfirm);
      isShowPasswordConfirm.value = !isShowPasswordConfirm.value;
    };

    const changeInputType = (refValue) => {
      return refValue ? 'text' : 'password';
    };

    const initialFormData = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };

    const formData = reactive({ ...initialFormData });

    const isAllInputed = computed(() => Object.values(formData).every(Boolean));

    const isInputedOneOfThem = computed(() =>
      Object.values(formData).some(Boolean)
    );

    const handleSubmit = () => {
      if (submitButtonRef.value.getAttribute('aria-disabled') === 'true') {
        return;
      }

      const { name, email, password, passwordConfirm } = formData;

      if (name.length < 2) {
        nameRef.value.select();
        return console.error('이름을 두글자 이상 입력하세요.');
      }

      if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        emailRef.value.select();
        return console.error('이메일 주소가 올바르지 않습니다.');
      }

      if (
        !/(?=.*\d)(?=.*[a-z])(?=.*(\\!|\\#|\\$|\\~|\\@|\\%|\\^|\\^|\\&|\\*)).{6,}/.test(
          password
        )
      ) {
        passwordRef.value.select();
        return console.error(
          '패스워드는 숫자, 문자, 특수문자 조합 6자리 이상 입력해야 합니다.'
        );
      }

      if (password !== passwordConfirm) {
        passwordConfirmRef.value.select();
        return console.error('패스워드와 패스워드 확인 값이 다릅니다.');
      }

      emit('changeRenderView', 'submitted', {
        name,
        email,
        password,
      });
    };

    const handleReset = () => {
      if (resetButtonRef.value.getAttribute('aria-disabled') === 'true') {
        return;
      }

      for (const [key, value] of Object.entries(initialFormData)) {
        formData[key] = value;
      }
    };

    return {
      formData,
      isAllInputed,
      isInputedOneOfThem,
      isShowPassword,
      isShowPasswordConfirm,
      nameRef,
      emailRef,
      passwordRef,
      passwordConfirmRef,
      submitButtonRef,
      resetButtonRef,
      handleSubmit,
      handleReset,
      handleToggleIsShowPassord,
      handleToggleIsShowPassordConfirm,
      changeInputType,
    };
  },

  template: /* html */ `
    <form class="form" novalidate @submit.prevent="handleSubmit" @reset.prevent="handleReset">
      <div class="formControl">
        <label for="userName">사용자 이름</label>
        <input ref="nameRef" id="userName" name="name" type="text" placeholder="이름" v-model="formData.name" />
      </div>
      <div class="formControl">
        <label for="userEmail">이메일</label>
        <input ref="emailRef" id="userEmail" name="email" type="email" placeholder="user@company.io" v-model="formData.email" />
      </div>
      <div class="formControl">
        <label for="userPassword">패스워드</label>
        <input ref="passwordRef" id="userPassword" name="password" :type="changeInputType(isShowPassword)" placeholder="문자,숫자,특수문자(@,!,$) 조합 6자리 이상" v-model="formData.password" />
        <TogglePasswordButton :isShow="isShowPassword" @toggle="handleToggleIsShowPassord"></TogglePasswordButton>
      </div>
      <div class="formControl">
        <label for="userPasswordConfirm">패스워드 확인</label>
        <input ref="passwordConfirmRef" id="userPasswordConfirm" name="passwordConfirm" :type="changeInputType(isShowPasswordConfirm)" placeholder="입력한 패스워드 다시 입력" v-model="formData.passwordConfirm" />
        <TogglePasswordButton :isShow="isShowPasswordConfirm" @toggle="handleToggleIsShowPassordConfirm"></TogglePasswordButton>
      </div>
      <div class="buttonGroup" role="group">
        <button ref="submitButtonRef" type="submit" :aria-disabled="!isAllInputed">회원가입</button>
        <button ref="resetButtonRef" type="reset" :aria-disabled="!isInputedOneOfThem">초기화</button>
      </div>
    </form>
    <pre class="pre">{{formData}}</pre>
  `,
};
