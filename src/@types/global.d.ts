type RenderView = 'home' | 'form' | 'submitted' | 'provide inject';

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
  [key: string]: string;
}

type FormPayload = Omit<IFormData, 'passwordConfirm'>;
