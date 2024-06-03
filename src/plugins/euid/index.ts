import type { App } from 'vue';

import vCapitalize from './directives/v-capitalize';
import vFontSize from './directives/v-font-size';
import vLetterSpacing from './directives/v-letter-spacing';
import vLineHeight from './directives/v-line-height';

import capitalize from './utils/capitalize';
import checkEmail from './utils/checkEmail';
import checkPassword from './utils/checkPassword';
import delay from './utils/delay';

export interface Euid {
  name: string;
  capitalize: typeof capitalize;
  checkEmail: typeof checkEmail;
  checkPassword: typeof checkPassword;
  delay: typeof delay;
}

export default {
  install(app: App, options?: { [key: string]: unknown }) {
    // 커스텀 디렉티브
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

    // Provide / Inject 활용
    app.provide('euid', {
      name: 'EUID',
      capitalize,
      checkEmail,
      checkPassword,
      delay,
      ...options,
    });
  },
};
