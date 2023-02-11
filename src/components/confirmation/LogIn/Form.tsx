// internal non-relative imports of sources
import * as React from 'react';
import { useId } from 'react';
// external non-relative imports of sources
import { FC } from 'react';
import { Box, TextField, Link, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import green from '@mui/material/colors/green';
import { ThemeProvider } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { blue, grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';
import { useFormik, FormikHelpers } from 'formik';
import { atom, selector, useSetRecoilState } from 'recoil';
// internal relatively crafted components of sources

import { Validate_Login } from '../../../utils/validationSchema';

// initialise useId hook for always creating unique identifier
// for html attributes both on the front-side and server-side
// const ID = useId();

type CredentialsType = {
  UserLogin: { email: string; password: number };
};

type UserLoginType = {
  UserLogin: {
    email: string;
    password: number;
  };
};

const UserLogIn: FC<UserLoginType['UserLogin']> = ({ email, password }) => {
  const [visible, setVisible] = React.useState<{ showPassw: boolean }>({
    showPassw: false,
  });

  const handleShowPass = (event: React.SyntheticEvent) => {
    setVisible({ showPassw: !visible.showPassw });
  };

  /* eslint implicit-arrow-linebreak: ["off", "beside"] */
  const wait = (time: number): Promise<Promise<void>> =>
    new Promise((resolve) => setTimeout(resolve, time));
  // using useFormik helper method to create form with formik and Mui fields.
  const Formik = useFormik({
    initialValues: { UserLogin: { email: '', password: 1 } },
    validationSchema: Validate_Login,
    onSubmit: async (
      values: CredentialsType,
      { setSubmitting }: FormikHelpers<CredentialsType>
    ) => {
      await wait(1000);

      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Box pt={2} sx={{ flexGrow: 1 }}>
        <form onSubmit={Formik.handleSubmit}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={11}>
              <Box>
                <TextField
                  type="text"
                  variant="filled"
                  size="small"
                  id="UserLogin.email"
                  name="UserLogin.email"
                  fullWidth
                  value={Formik.values.UserLogin.email}
                  onChange={Formik.handleChange}
                  error={
                    Formik.touched.UserLogin?.email &&
                    Boolean(Formik.errors.UserLogin?.email)
                  }
                  helperText={
                    Formik.touched.UserLogin?.email &&
                    Formik.errors.UserLogin?.email
                  }
                  sx={{
                    bgcolor: 'white',
                    '& .MuiFilledInput-root': {
                      bgcolor: 'white',
                    },
                    '& .MuiFilledInput-underline': { bgcolor: '#fafafa' },
                    '& .Mui-focused': { bgcolor: '#fafafa' },
                  }}
                  placeholder="enter your email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: `${`${green[800]}`}` }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box>
                <Box pl={30}>
                  <Typography>
                    <Link
                      href="#f"
                      variant="body2"
                      sx={{
                        color: 'green',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                      }}
                    >
                      forgot password
                    </Link>
                  </Typography>
                </Box>
                <TextField
                  type={visible.showPassw ? 'text' : 'password'}
                  variant="filled"
                  size="small"
                  id="UserLogin.password"
                  name="UserLogin.password"
                  fullWidth
                  value={Formik.values.UserLogin?.password}
                  onChange={Formik.handleChange}
                  error={
                    Formik.touched.UserLogin?.password &&
                    Boolean(Formik.errors.UserLogin?.password)
                  }
                  helperText={
                    Formik.touched.UserLogin?.password &&
                    Formik.errors.UserLogin?.password
                  }
                  sx={{
                    bgcolor: 'white',
                    '& .MuiFilledInput-root': {
                      bgcolor: '#fafafa',
                      '& .Mui-focused': { bgcolor: '#fafafa' },
                    },
                  }}
                  placeholder="enter your password.."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: `${green[800]}` }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
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
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  disableRipple
                  type="submit"
                >
                  <Typography fontWeight="bold">Login</Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={11}>
              <Box>
                <Divider>oR login with</Divider>
              </Box>
            </Grid>
          </Grid>
        </form>
        <Box pt={1}>
          <Stack
            display="flex"
            justifyContent="center"
            spacing={1}
            direction="row"
          >
            <IconButton
              disableRipple
              aria-label="delete"
              sx={{ bgcolor: alpha(grey[100], 0.19) }}
            >
              <FacebookIcon sx={{ color: 'blue' }} />
            </IconButton>

            <IconButton
              disableRipple
              aria-label="delete"
              sx={{ bgcolor: alpha(grey[100], 0.19) }}
            >
              <GoogleIcon sx={{ color: 'red' }} />
            </IconButton>
            <IconButton
              disableRipple
              aria-label="delete"
              sx={{ bgcolor: alpha(grey[100], 0.19) }}
            >
              <TwitterIcon sx={{ color: `${blue[800]}` }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default UserLogIn;
