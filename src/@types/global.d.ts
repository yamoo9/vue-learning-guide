type RenderView =
  | 'home'
  | 'form'
  | 'submitted'
  | 'props drilling'
  | 'custom directive'
  | 'animation'
  | 'transition'
  | 'transition group'
  | 'teleport';

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
  profileImage: string;
  [key: string]: string;
}

type FormPayload = Omit<IFormData, 'passwordConfirm'>;
