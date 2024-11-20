import { createApp } from 'vue';
import './styles/globals.css';
import App from './App.vue';
import globalDirectives from './directives/global-directives';

const app = createApp(App);

globalDirectives.forEach(({ name, fn }) => {
  app.directive(name, fn);
});

app.mount('#app');
