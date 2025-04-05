import {
  createApp,
  computed,
  ref,
} from 'https://esm.sh/vue/dist/vue.esm-browser.js'
import data from './data.json'
import './styles/globals.css'

const app = createApp({
  setup() {
    const headline = ref(data.headline)

    const convertHeadline = computed(() =>
      headline.value.replace(/javascript/i, 'ue')
    )

    const description = ref(data.description)

    const convertDescription = computed(() =>
      description.value.replace(/javascript/i, 'Vue')
    )

    const logos = ref(data.logos)
    const count = ref(data.count)

    const increaseCount = () => count.value++

    return {
      headline,
      convertHeadline,
      description,
      convertDescription,
      logos,
      count,
      increaseCount,
    }
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
}).mount('#app')

globalThis.vm = app
