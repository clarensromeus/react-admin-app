import { createContext } from 'react';

interface IAuthLogin<S> {
  Username: S;
  Password: S;
}

interface IAuthRegister<K> {
  Firstname: K;
  Lastname: K;
  Email: K;
  Password: K;
  ConfirmPassword: K;
  Image?: K;
  SchoolLevel?: K;
}

type IData = IAuthLogin<string> | IAuthRegister<string>;

interface IinitialData {
  payload: IData[];
}

const ThemeContext = createContext<IinitialData | null>(null);

export default ThemeContext;
