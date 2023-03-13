import {
  StudentLoginType,
  AdminLoginType,
  StudentRegisterType,
  AdminRegisterType,
} from './globalStoreTypes';

interface IAuthLogin<S> {
  Username: S;
  Password: S;
}

type Status = 'student' | 'admin';

interface ILogin<S> {
  type: S;
  status: Status;
  payload: IAuthLogin<S>;
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

interface IRegister<K> {
  type: K;
  status: Status;
  payload: IAuthRegister<K>;
}

const AdminLogin = (
  Payload: IAuthLogin<string>,
  status: Status
): ILogin<string> => {
  return {
    type: AdminLoginType,
    status,
    payload: Payload,
  };
};

const StudentLogin = (
  Payload: IAuthLogin<string>,
  status: Status
): ILogin<string> => {
  return {
    type: StudentLoginType,
    status,
    payload: Payload,
  };
};

const AdminRegister = (
  Payload: Omit<IAuthRegister<string>, 'SchoolLevel'>,
  status: Status
): IRegister<string> => {
  return {
    type: AdminRegisterType,
    status,
    payload: Payload,
  };
};

const StudentRegister = (
  Payload: IAuthRegister<string>,
  status: Status
): IRegister<string> => {
  return {
    type: StudentRegisterType,
    status,
    payload: Payload,
  };
};

export { AdminLogin, StudentLogin, AdminRegister, StudentRegister };
