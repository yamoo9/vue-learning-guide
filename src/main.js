import {
  createApp,
  ref,
  reactive,
  onBeforeMount,
} from 'https://esm.sh/vue/dist/vue.esm-browser.js';
import spinner from './assets/spinner.svg';
import delay from './utils/delay';
import './styles/globals.css';

const vueApp = createApp({
  setup() {
    const quoteId = ref(1);
    const state = reactive({
      isLoading: false,
      data: null,
      error: null,
    });

    const fetchQuote = async (id) => {
      state.isLoading = true;
      try {
        const response = await fetch(`https://dummyjson.com/quotes/${id}`);
        const jsonData = await response.json();
        await delay(Math.random() * 1000);
        state.data = jsonData;
      } catch (error) {
        state.error = error;
      } finally {
        state.isLoading = false;
      }
    };

    onBeforeMount(() => {
      fetchQuote(quoteId.value);
    });

    return {
      state,
      spinner,
    };
  },

  template: /* html */ `
    <form class="quoteForm" lang="en">
      <label for="quoteId">Quote ID</label>
      <input id="quoteId" type="number" v-model.number.lazy="quoteId" />
    </form>

    <p v-if="state.isLoading" lang="en">
      <img :src="spinner" alt="Loading quote..." height="100" />
    </p>
    
    <p v-if="state.error" lang="en">
      ERROR: {{state.error.message}}
    </p>
    
    <article v-if="!state.isLoading" class="quoteArticle" lang="en">
      <h2>Quote {{state.data.id}}.</h2>
      <p>{{state.data.quote}}</p>
      <span>{{state.data.author}}</span>
    </article>
  `,
});

globalThis.vm = vueApp.mount('#app');
