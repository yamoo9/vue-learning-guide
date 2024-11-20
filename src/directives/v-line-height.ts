import type { DirectiveBinding } from 'vue';

const vLineHeight = (el: HTMLElement, binding: DirectiveBinding) => {
  el.style.lineHeight = binding.value;
};

export default vLineHeight;
