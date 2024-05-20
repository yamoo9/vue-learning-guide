import './styles/globals.css';
import {
  createApp,
  ref,
  reactive,
  computed,
} from 'https://esm.sh/vue/dist/vue.esm-browser.js';

const vueApp = createApp({
  setup() {
    const renderView = ref('form');
    const isFormRender = computed(() => renderView.value.includes('form'));

    let commentId = 1;
    const comments = reactive([
      {
        id: commentId++,
        title: 'Vue.js는 놀랍습니다.',
        content: '개발자의 번거로움을 줄여주는 점진적인 프레임워크입니다.',
      },
      {
        id: commentId++,
        title: 'Vue.js는 빠르고 가볍습니다.',
        content:
          '자체 최적화 기술로 성능을 최대한 끌어올려주며, 번들된 파일 크기도 작습니다. 자체 최적화 기술로 성능을 최대한 끌어올려주며, 번들된 파일 크기도 작습니다.',
      },
    ]);

    const handleChangeView = () => {
      renderView.value = isFormRender.value ? 'comments' : 'form';
    };

    return { isFormRender, comments, handleChangeView };
  },
  template: /* html */ `
    <button
      type="button"
      class="changeViewButton"
      @click="handleChangeView"
    >
      <svg v-if="isFormRender" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
      </svg>
      <svg v-else fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"></path>
      </svg>
    </button>

	  <form v-if="isFormRender" class="form" aria-label="댓글 입력 폼">
      <div class="formControl">
        <label for="title">제목</label>
        <input id="title" name="title" type="text" />
      </div>
      <div class="formControl">
        <label for="contents">내용</label>
        <textarea id="contents" name="contents" rows="4" cols="30" />
      </div>
      <div class="buttonGroup" role="group">
        <button type="submit">저장</button>
        <button type="reset">취소</button>
      </div>
    </form>
    
    <section v-else class="commentList">
      <h2 class="sr-only">댓글 섹션</h2>
      <article v-for="comment in comments" :key="comment.id">
        <h3>{{comment.title}}</h3>
        <p>{{comment.content}}</p>
      </article>
    </section>
  `,
});

globalThis.vm = vueApp.mount('#app');
