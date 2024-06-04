import { readonly, ref } from 'vue';

export default function useIsShow(defaultValue: boolean = true) {
  const isShow = ref<boolean>(defaultValue);

  const toggle = () => {
    isShow.value = !isShow.value;
  };

  return {
    isShow: readonly(isShow),
    toggle,
  };
}
