import {
  createApp,
  ref,
  computed,
} from 'https://esm.sh/vue/dist/vue.esm-browser.js';
import jsonData from './data.json';
import './styles/globals.css';

const vueApp = createApp({
  setup() {
    const headline = ref(jsonData.headline);
    const convertHeadline = computed(() =>
      headline.value.replace(/javascript/i, 'ue')
    );

    const description = ref(jsonData.description);
    const convertDescription = computed(() =>
      description.value.replace(/javascript/i, 'Vue')
    );

    const logos = ref(jsonData.logos);
    const showLogo = ref(true);
    const changeLogoOrText = () => (showLogo.value = !showLogo.value);

    const count = ref(jsonData.count);
    const increaseCount = () => count.value++;

    const lectureSubjects = ref([
      'Vue 라이브러리',
      'Vue Router 라이브러리',
      'Pinia 라이브러리',
    ]);

    return {
      headline,
      convertHeadline,
      description,
      convertDescription,
      logos,
      showLogo,
      changeLogoOrText,
      count,
      increaseCount,
      lectureSubjects,
    };
  },
  template: /* html */ `
	  <h1>
		  <img 
        v-show="showLogo"
        :src="logos.vue.src"
        :alt="logos.vue.label" 
        :height="logos.vue.size" 
      />
      <b v-show="!showLogo">V</b>{{convertHeadline}}
	  </h1>
	  <p>{{convertDescription}}</p>
	  <button
      type="button"
      class="button"
      @click="increaseCount(); changeLogoOrText()"
    >
      {{count}}
    </button>

    <p v-if="lectureSubjects.length === 0">학습할 주제가 없습니다.</p>
    <ul v-else class="subjectList">
      <li>Vue 라이브러리</li>
      <li>Vue Router 라이브러리</li>
      <li>Pinia 라이브러리</li>
    </ul>
  `,
});

globalThis.vm = vueApp.mount('#app');
