import './styles/globals.css'
import data from './data.json'

const app = Vue.createApp({
  data: () => ({ ...data }),
  computed: {
    convertHeadline() {
      return this.headline.replace(/javascript/i, 'ue')
    },
    convertDescription() {
      return this.description.replace(/javascript/i, 'Vue')
    },
  },
  methods: {
    increaseCount() {
      this.count++
    },
  },
  template: /* html */ `
	  <h1>
		  <img 
        :src="logos.vue.src"
        :alt="logos.vue.label" 
        :height="logos.vue.size" 
      />
      {{convertHeadline}}
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
