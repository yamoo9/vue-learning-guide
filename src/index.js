import './styles/globals.css'
import { createApp } from './libs/like-vue.js'
import jsonData from './data.json'

const app = createApp({
  data() {
    return { ...jsonData }
  },
  template: /* html */ `
    <h1>
      <img src="{{logos.js.src}}" height="{{logos.js.size}}" alt="{{logos.js.label}}" />
      {{headline}}
    </h1>
    <p>{{description}}</p>
    <button type="button" class="button">{{count}}</button>
  `,
}).mount('#app')

app.on('button', 'click', ($data) => {
  $data.count++
  $data.headline += '⭐️'
})
