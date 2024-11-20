import vCapitalize from './v-capitalize';
import vFontSize from './v-font-size';
import vLetterSpacing from './v-letter-spacing';
import vLineHeight from './v-line-height';

const globalDirectives = [
  { name: 'capitalize', fn: vCapitalize },
  { name: 'font-size', fn: vFontSize },
  { name: 'letter-spacing', fn: vLetterSpacing },
  { name: 'line-height', fn: vLineHeight },
];

export default globalDirectives;
