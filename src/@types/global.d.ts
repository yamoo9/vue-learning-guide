type RenderView =
  | 'home'
  | 'form'
  | 'submitted'
  | 'props drilling'
  | 'provide inject';

interface INavigationItem {
  id: number;
  href: string;
  viewMode: RenderView;
}

interface ILogo {
  src: string;
  size: string;
  label: string;
}

interface IJsonData {
  headline: string;
  description: string;
  logos: {
    js: ILogo;
    vue: ILogo;
  };
}

interface IFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

type FormPayload = Omit<IFormData, 'passwordConfirm'>;
