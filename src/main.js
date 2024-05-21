import {
  createApp,
  ref,
  reactive,
  computed,
  watchEffect,
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

    const isStopQuoteId = computed(() => quoteId.value > 3);

    const unwatch = watchEffect(async () => {
      if (isStopQuoteId.value) {
        unwatch();
      }

      state.isLoading = true;
      try {
        const response = await fetch(
          `https://dummyjson.com/quotes/${quoteId.value}`
        );
        const jsonData = await response.json();
        await delay(Math.random() * 1500);
        state.data = jsonData;
      } catch (error) {
        state.error = error;
      } finally {
        state.isLoading = false;
      }
    });

    return {
      state,
      spinner,
      quoteId,
      isStopQuoteId,
    };
  },

  template: /* html */ `
    <form class="quoteForm" lang="en">
      <label for="quoteId">Quote ID</label>
      <input
        id="quoteId"
        type="number"
        v-model.number="quoteId"
        :disabled="state.isLoading"
        :readonly="isStopQuoteId"
      />
    </form>

    <p v-if="state.isLoading" lang="en">
      <img :src="spinner" alt="Loading quote..." height="100" />
    </p>
    
    <p v-if="state.error" lang="en">
      ERROR: {{state.error.message}}
    </p>
    
    <article v-if="!state.isLoading && state.data" class="quoteArticle" lang="en">
      <h2>Quote {{state.data.id}}.</h2>
      <p>{{state.data.quote}}</p>
      <span>{{state.data.author}}</span>
    </article>

    <p v-if="!state.isLoading && !state.data" lang="en" style="font-size: 36px">
      No quotes loaded. 😳
    </p>
  `,
});

globalThis.vm = vueApp.mount('#app');
