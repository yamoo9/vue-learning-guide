import { createApp } from 'vue';
import './styles/globals.css';
import App from './App.vue';
import { createHead } from '@unhead/vue';

const app = createApp(App);
const head = createHead();

app.use(head);
app.mount('#app');
