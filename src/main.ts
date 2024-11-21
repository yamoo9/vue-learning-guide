import { createApp } from 'vue';
import euidPlugin from './plugins/euid';
import App from './App.vue';
import './styles/globals.css';

const app = createApp(App);

app.use(euidPlugin);
app.mount('#app');
