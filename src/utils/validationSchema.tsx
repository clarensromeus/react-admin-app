import { ObjectSchema, string, object, ref } from 'yup';

type StudentLoginType<T> = {
  StudentLogin: {
    email: T;
    password: T;
  };
};

type StudentRegisterType<T> = {
  StudentRegisteration: T;
};

const ValidationSchemaLogin = object().shape({
  StudentLogin: object().shape({
    email: string()
      .required('email must not be empty')
      .matches(/^\b[\w-.]+@([\w-]+\.)+[\w-]{2,4}\b$/g, 'enter a valid email')
      .trim(),
    password: string()
      .required('password must not be empty')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'enter a valid and strong password'
      )
      .min(10, 'password is too short')
      .max(16, 'password is too long'),
  }),
});

const ValidationSchemaRegister = object().shape({
  StudentRegisteration: object().shape({
    Firstname: string()
      .required('firstname must not be empty')
      .min(5, 'Firstname is too short')
      .trim(),
    Lastname: string()
      .required('lastname must not be empty')
      .min(6, 'Lastname is too short'),
    Email: string()
      .required('email must not be empty')
      .matches(/^\b[\w-.]+@([\w-]+\.)+[\w-]{2,4}\b$/g, 'enter a valid email')
      .trim(),
    Password: string()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'enter a valid and strong password'
      )
      .required('password must not be empty')
      .min(10, 'password is too short')
      .max(16, 'password is too long'),
    PasswordConfirmation: string()
      .required('must not be empty')
      .oneOf([ref('Password'), null], 'password do not match')
      .trim(),
  }),
});

export {
  ValidationSchemaLogin as Validate_Login,
  ValidationSchemaRegister as Validate_Register,
};

// instead of using built-in email object validation of the Api i am
// using the matches object to validate email with effective RegEx syntax
