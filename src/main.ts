import { createApp } from 'vue';
import './styles/globals.css';
import App from './App.vue';

import vCapitalize from './directives/v-capitalize';
import vFontSize from './directives/v-font-size';
import vLetterSpacing from './directives/v-letter-spacing';
import vLineHeight from './directives/v-line-height';

const app = createApp(App);

const customDirectives = [
  ['capitalize', vCapitalize],
  ['font-size', vFontSize],
  ['letter-spacing', vLetterSpacing],
  ['line-height', vLineHeight],
];

customDirectives.forEach(([directiveName, directive]) => {
  if (typeof directiveName === 'string' && typeof directive === 'function') {
    app.directive(directiveName, directive);
  }
});

app.mount('#app');
