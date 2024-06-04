import type { DirectiveBinding } from 'vue';

const vFontSize = (el: HTMLElement, binding: DirectiveBinding) => {
  el.style.fontSize = `${binding.value}px`;
};

export default vFontSize;
