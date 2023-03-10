// internal importts of sources
import * as React from 'react';
// external imports of sources
import { FC, useId } from 'react';
import { Box, Typography, TextField, Button, Checkbox } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik, FormikHelpers } from 'formik';
// internal crafted imports of sources
import { Validate_Register } from '../../../utils/validationSchema';

// special scope for defining types
const newLine: string = ' ';

type Register<S, N> = {
  firstname: S;
  lastname: S;
  email: S;
  passInitialisation: S | N;
  passConfirmation: S | N;
};

type RegisterProps<T extends Register<string, number>> = {
  students: {
    [K in keyof T as `${Capitalize<string & K>}`]: T[K];
  };
};

type RegisterCase = { N: string; S: string };

type studentInfo<T, S> = {
  StudentRegisteration: {
    Firstname: S;
    Lastname: S;
    Email: S;
    Password: T;
    PasswordConfirmation: T;
  };
};

/* eslint no-redeclare: "off" */
const Register: FC<RegisterProps<Register<string, number>>['students']> = ({
  Firstname,
  Lastname,
  Email,
  PassInitialisation,
  PassConfirmation,
}) => {
  const [visible, setVisible] = React.useState<{ showPassw: boolean }>({
    showPassw: false,
  });

  const handleShowPass = (event: React.SyntheticEvent) => {
    setVisible({ showPassw: !visible.showPassw });
  };

  const ID = useId();

  /* eslint implicit-arrow-linebreak: ["off", "beside"] */
  const Sleep = (time: number): Promise<Promise<void>> =>
    new Promise((resolve) => setTimeout(resolve, time));

  const Formik = useFormik({
    initialValues: {
      StudentRegisteration: {
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
        PasswordConfirmation: '',
      },
    },
    validationSchema: Validate_Register,
    onSubmit: async (
      values: studentInfo<RegisterCase['S'], RegisterCase['N']>,
      {
        setSubmitting,
      }: FormikHelpers<studentInfo<RegisterCase['S'], RegisterCase['N']>>
    ) => {
      Sleep(2000);
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <Box pt={2}>
      {' '}
      <form onSubmit={Formik.handleSubmit}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid container item xs={10} spacing={1}>
            <Grid item xs={6}>
              <Box>
                <TextField
                  type="text"
                  variant="filled"
                  size="small"
                  id={`${ID}_Firstname`}
                  name="StudentRegisteration.Firstname"
                  value={Formik.values.StudentRegisteration.Firstname}
                  onChange={Formik.handleChange}
                  fullWidth
                  placeholder="Firstname..."
                  sx={{
                    bgcolor: 'white',
                    '& .MuiFilledInput-root': {
                      bgcolor: '#fafafa',
                    },
                    '& .Mui-focused': { bgcolor: '#fafafa' },
                  }}
                  error={
                    Formik.touched.StudentRegisteration?.Firstname &&
                    Boolean(Formik.errors.StudentRegisteration?.Firstname)
                  }
                  helperText={
                    Formik.touched.StudentRegisteration?.Firstname &&
                    Formik.errors.StudentRegisteration?.Firstname
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <TextField
                  type="text"
                  variant="filled"
                  size="small"
                  id={`${ID}_Lastname`}
                  name="StudentRegisteration.Lastname"
                  value={Formik.values.StudentRegisteration.Lastname}
                  onChange={Formik.handleChange}
                  fullWidth
                  placeholder="Lastname"
                  sx={{
                    bgcolor: 'white',
                    '& .MuiFilledInput-root': {
                      bgcolor: '#fafafa',
                    },
                    '& .Mui-focused': { bgcolor: '#fafafa' },
                  }}
                  error={
                    Formik.touched.StudentRegisteration?.Lastname &&
                    Boolean(Formik.errors.StudentRegisteration?.Lastname)
                  }
                  helperText={
                    Formik.touched.StudentRegisteration?.Lastname &&
                    Formik.errors.StudentRegisteration?.Lastname
                  }
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={10}>
            <Box>
              <TextField
                type="text"
                variant="filled"
                size="small"
                id={`${ID}_Email`}
                name="StudentRegisteration.Email"
                value={Formik.values.StudentRegisteration.Email}
                onChange={Formik.handleChange}
                fullWidth
                placeholder="enter your email.."
                sx={{
                  bgcolor: 'white',
                  '& .MuiFilledInput-root': {
                    bgcolor: '#fafafa',
                    '& .Mui-focused': {
                      color: '#fafafa',
                    },
                  },
                }}
                error={
                  Formik.touched.StudentRegisteration?.Email &&
                  Boolean(Formik.errors.StudentRegisteration?.Email)
                }
                helperText={
                  Formik.touched.StudentRegisteration?.Email &&
                  Formik.errors.StudentRegisteration?.Email
                }
              />
            </Box>
          </Grid>
          <Grid item xs={10}>
            <TextField
              type={visible.showPassw ? 'text' : 'password'}
              variant="filled"
              size="small"
              id={`${ID}_Password`}
              name="StudentRegisteration.Password"
              value={Formik.values.StudentRegisteration.Password}
              onChange={Formik.handleChange}
              fullWidth
              placeholder="enter your password.."
              sx={{
                bgcolor: 'white',
                '& .MuiFilledInput-root': {
                  bgcolor: '#fafafa',
                },
                '& .Mui-focused': {
                  bgcolor: '#fafafa',
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Typography variant="h6" sx={{}}>
                      <Button
                        color="inherit"
                        disableRipple
                        disableElevation
                        onClick={handleShowPass}
                        sx={{
                          fontWeight: 'bold',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        {visible.showPassw ? 'hide' : 'show'}
                      </Button>
                    </Typography>
                  </InputAdornment>
                ),
              }}
              error={
                Formik.touched.StudentRegisteration?.Password &&
                Boolean(Formik.errors.StudentRegisteration?.Password)
              }
              helperText={
                Formik.touched.StudentRegisteration?.Password &&
                Formik.errors.StudentRegisteration?.Password
              }
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              type="password"
              variant="filled"
              size="small"
              id={`${ID}_ConfirmationPassword`}
              name="StudentRegisteration.PasswordConfirmation"
              value={Formik.values.StudentRegisteration.PasswordConfirmation}
              fullWidth
              onChange={Formik.handleChange}
              placeholder="confirm your password.."
              sx={{
                bgcolor: 'white',
                '& .MuiFilledInput-root': {
                  bgcolor: '#fafafa',
                  '& .Mui-focused': { color: '#fafafa' },
                },
              }}
              error={
                Formik.touched.StudentRegisteration?.PasswordConfirmation &&
                Boolean(
                  Formik.errors.StudentRegisteration?.PasswordConfirmation
                )
              }
              helperText={
                Formik.touched.StudentRegisteration?.PasswordConfirmation &&
                Formik.errors.StudentRegisteration?.PasswordConfirmation
              }
            />
          </Grid>
          <Grid item xs={10}>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: '#fafafa',
                      '&.Mui-checked': {
                        color: 'green',
                        accentColor: '#fafafa',
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" pt={2} pr={2}>
                    by checking, you agree with our
                    <span>{newLine}</span>
                    <Link href="#f" sx={{ color: 'green' }} underline="hover">
                      terms of condition
                    </Link>
                    {'  '}
                    and our
                    <span style={{}}>
                      {newLine}
                      <Link href="#f" sx={{ color: 'green' }} underline="hover">
                        privacy policy
                      </Link>
                    </span>
                  </Typography>
                }
              />
            </Box>
            <Box pt={1}>
              <Button
                variant="contained"
                color="success"
                type="submit"
                fullWidth
                disableRipple
              >
                <Typography fontWeight="bold">Login</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ visibility: 'hidden' }}>...</Box>
      </form>
    </Box>
  );
};

export default Register;

// using useId hook to create unique identifier for input fields on
// both the client-side and the server-side
