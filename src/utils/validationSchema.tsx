import * as yup from 'yup';

const Emailvalidation: string = '';

const ValidationSchemaLogin = yup.object().shape({
  UserLogin: yup.object().shape({
    email: yup.string().required('email must not be empty').trim(),
    password: yup
      .number()
      .required('password must not be empty')
      .min(10, 'password is too short')
      .max(10, 'password is too long'),
  }),
});

const ValidationSchemaRegister = yup.object().shape({
  StudentRegisteration: yup.object().shape({
    Firstname: yup.string().required('firstname must not be empty').trim(),
    Lastname: yup.string().required('lastname must not be empty'),
    Email: yup.string().required('email must not be empty').trim(),
    Password: yup
      .number()
      .required('password must not be empty')
      .min(10, 'password is too short')
      .max(16, 'password is too long'),
    PasswordConfirmation: yup.ref('password'),
  }),
});

export {
  ValidationSchemaLogin as Validate_Login,
  ValidationSchemaRegister as Validate_Register,
};
