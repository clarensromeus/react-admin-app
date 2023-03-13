import { atom } from 'recoil';

interface ILogin {
  username: string;
  password: string;
}

interface IRegister<T> {
  Firstname: T;
  Lastname: T;
  Email: T;
  Password: T;
  ConfirmPassword: T;
  Image: T;
  SchoolLevel: T;
}

const LoginState = atom<Partial<ILogin>>({
  key: 'Login',
  default: {},
});

const RegisterState = atom<Partial<IRegister<string>>>({
  key: 'Register',
  default: {},
});

export { LoginState, RegisterState };
