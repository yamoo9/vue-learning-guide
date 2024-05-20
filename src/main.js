import './styles/globals.css';
import spinner from './assets/spinner.svg';
import delay from './utils/delay';
import {
  createApp,
  ref,
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from 'https://esm.sh/vue/dist/vue.esm-browser.js';

const vueApp = createApp({
  setup() {
    const renderView = ref('form');
    const isFormRender = computed(() => renderView.value.includes('form'));
    const printButtonLabel = computed(() =>
      isFormRender.value ? '댓글 목록 보기' : '입력 폼 보기'
    );

    let commentId = 1;
    const comments = reactive([]);
    const reversedComments = computed(() => comments.toReversed());

    const handleChangeView = () => {
      renderView.value = isFormRender.value ? 'comments' : 'form';
    };

    const formData = reactive({
      title: '',
      content: '',
    });

    const isOneInputed = computed(() => {
      const { title, content } = formData;
      return title.trim().length > 0 || content.trim().length > 0;
    });

    const isAllInputed = computed(() => {
      const { title, content } = formData;
      return title.trim().length > 0 && content.trim().length > 0;
    });

    const handleInput = ({ target }) => {
      formData[target.name] = target.value;
    };

    const handleSaveComment = () => {
      const { title, content } = formData;

      comments.push({
        id: commentId++,
        title,
        content,
      });

      renderView.value = 'comments';

      handleResetComment();
    };

    const handleResetComment = () => {
      formData.title = '';
      formData.content = '';
    };

    const handleCheckDisabled = (e) => {
      if (e.target.getAttribute('aria-disabled') === 'true') {
        e.preventDefault();
        alert('🚨 제목과 내용이 입력 되어야 저장 또는 취소할 수 있습니다.');
      }
    };

    onBeforeMount(async () => {
      const { default: data } = await import('./data/comments.json');
      await delay(1200);
      data.forEach((item) => comments.push(item));
    });

    let changeViewButtonElement = null;

    onMounted(() => {
      changeViewButtonElement = document.querySelector('.changeViewButton');
    });

    onBeforeUpdate(() => {
      changeViewButtonElement.style.cssText = '--primary: #f0db4f';
    });

    onUpdated(async () => {
      await delay(800);
      changeViewButtonElement.style.removeProperty('--primary');
    });

    return {
      isFormRender,
      printButtonLabel,
      comments,
      reversedComments,
      handleChangeView,
      formData,
      isOneInputed,
      isAllInputed,
      handleInput,
      handleSaveComment,
      handleCheckDisabled,
      handleResetComment,
      spinner,
    };
  },

  template: /* html */ `
    <button
      type="button"
      class="changeViewButton"
      @click="handleChangeView"
      :aria-label="printButtonLabel"
      :title="printButtonLabel"
    >
      <svg v-if="isFormRender" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
      </svg>
      <svg v-else fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"></path>
      </svg>
    </button>

	  <form
      v-if="isFormRender"
      @submit.prevent="handleSaveComment"
      @reset.prevent="handleResetComment"
      class="form"
      aria-label="댓글 입력 폼"
    >
      <div class="formControl">
        <label for="title">제목</label>
        <input
          id="title"
          name="title"
          type="text"
          :value="formData.title"
          @input.lazy="handleInput"
        />
      </div>
      <div class="formControl">
        <label for="content">내용</label>
        <textarea
          id="content"
          name="content"
          rows="4"
          cols="30"
          :value="formData.content"
          @input="handleInput"
        />
      </div>
      <div class="buttonGroup" role="group">
        <button 
          type="submit" 
          :aria-disabled="isAllInputed ? 'false' : 'true'"
          @click="handleCheckDisabled"
        >
          저장
        </button>
        <button 
          type="reset" 
          :aria-disabled="isOneInputed ? 'false' : 'true'"
          @click="handleCheckDisabled"
        >
          취소
        </button>
      </div>
    </form>
    
    <section v-else class="commentList">
      <h2 class="sr-only">댓글 섹션</h2>
      <template v-if="reversedComments.length > 0">
        <article v-for="comment in reversedComments" :key="comment.id">
          <h3>{{comment.title}}</h3>
          <p>{{comment.content}}</p>
        </article>
      </template>
      <p v-else class="spinner">
        <img :src="spinner" alt="데이터 로딩 중..." height="100" />
      </p>
    </section>
  `,
});

globalThis.vm = vueApp.mount('#app');
