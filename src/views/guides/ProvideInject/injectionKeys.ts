// export const toggleChildrenKey = Symbol('toggleChildrenKey');

import type { InjectionKey, Ref } from 'vue';

export interface ToggleChildrenValue {
  isShow: Readonly<Ref<boolean>>;
  toggle: () => void;
}

export const toggleChildrenKey = Symbol() as InjectionKey<ToggleChildrenValue>;
