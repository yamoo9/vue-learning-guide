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

    const sortedKey = ref('asc');

    const sortedLogos = computed(() => {
      let sortValue = sortedKey.value.includes('asc') ? 1 : -1;

      return Object.fromEntries(
        Object.entries(logos.value).toSorted(([xKey], [yKey]) =>
          xKey > yKey ? sortValue : xKey < yKey ? sortValue * -1 : 0
        )
      );
    });

    const ascSort = ({ type, key }) => {
      if (type === 'click' || (type === 'keydown' && key === 'Enter')) {
        sortedKey.value = 'asc';
      }
    };
    const descSort = ({ type, key }) => {
      if (type === 'click' || (type === 'keydown' && key === 'Enter')) {
        sortedKey.value = 'desc';
      }
    };

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
      sortedKey,
      sortedLogos,
      ascSort,
      descSort,
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

    <ul v-if="lectureSubjects.length > 0" class="subjectList">
      <template v-for="(subject, index) in lectureSubjects" :key="index">
        <li v-if="index > 0">{{subject}}</li>
      </template>
    </ul>
    <p v-else>학습할 주제가 없습니다.</p>

    <table class="table">
      <caption class="sr-only">로고 정보 표</caption>
      <tr>
        <td 
          role="button" 
          tabindex="0" 
          @click="ascSort" 
          @keydown="ascSort"
        >
        오름차순
        </td>
        <td 
          role="button" 
          tabindex="0" 
          @click="descSort" 
          @keydown="descSort"
        >
          내림차순
        </td>
      </tr>
      <template v-for="(logoValue, logoKey, index) in sortedLogos" :key="index">
        <tr v-for="(value, key, logoIndex) in logoValue" :key="key">
          <th>{{logoKey}}.{{key}}</th>
          <td v-if="value.startsWith?.('https://')">
            <a :href="value" target="_blank" rel="noopener noreferrer">{{value}}</a>
          </td>
          <td v-else>{{value}}</td>
        </tr>
      </template>
    </table>
  `,
});

globalThis.vm = vueApp.mount('#app');
