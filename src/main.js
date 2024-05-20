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
    const count = ref(jsonData.count);

    const increaseCount = () => count.value++;

    return {
      headline,
      convertHeadline,
      description,
      convertDescription,
      logos,
      count,
      increaseCount,
    };
  },
  template: /* html */ `
	  <h1>
		  <img 
        :src="logos.vue.src"
        :alt="logos.vue.label" 
        :height="logos.vue.size" 
      />{{convertHeadline}}
	  </h1>
	  <p>{{convertDescription}}</p>
	  <button
      type="button"
      class="button"
      @click="increaseCount"
    >
      {{count}}
    </button>
  `,
});

globalThis.vm = vueApp.mount('#app');
