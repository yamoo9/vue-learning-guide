import type { DirectiveBinding } from 'vue';

const vLetterSpacing = (el: HTMLElement, binding: DirectiveBinding) => {
  el.style.letterSpacing = `${binding.value}px`;
};

export default vLetterSpacing;
