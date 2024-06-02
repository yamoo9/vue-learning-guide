import { createApp } from 'vue';
import './styles/globals.css';
import App from './App.vue';
import euidPlugin from './plugins/euid';

const app = createApp(App);

app.use(euidPlugin);
app.mount('#app');
