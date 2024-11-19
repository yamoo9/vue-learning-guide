import { InjectionKey, Ref } from 'vue';

export interface IsShowChildren {
  isShow: Readonly<Ref<boolean>>;
  toggle: () => void;
}

export const isShowChildrenSymbol = Symbol(
  'isShowChildren'
) as InjectionKey<IsShowChildren>;
