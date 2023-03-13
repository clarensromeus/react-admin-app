// internal imports of sources
import * as React from 'react';
// external imports of sources
import { Paper, Box, Typography } from '@mui/material';
import { FC } from 'react';
import { alpha, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import KeyIcon from '@mui/icons-material/Key';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import orange from '@mui/material/colors/orange';

import green from '@mui/material/colors/green';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
// internal crafted imports of sources
import UserLogIn from './LogIn/Form';
import Register from './Register/Form';
import TabPanel from './Register/TabPanel';

// special scope for type declarations
type CredentialsType = {
  UserLogin: {
    email: string;
    password: string;
  };
};

// type for user for registration informations
type RegisterForm<S, N> = {
  firstname: S;
  lastname: S;
  email: S;
  passInitialisation: S | N;
  passConfirmation: S | N;
};

type RegisterUser<T extends RegisterForm<string, number>> = {
  students: {
    [K in keyof T as `${Capitalize<string & K>}`]: T[K];
  };
};

type EXACTNESS = 'bottom' | 'top' | 'start' | 'end';

type ControlPropType = {
  (item: string): void;
};

const userCredentials: CredentialsType['UserLogin'] = {
  email: 'romeusclarens10@gmail.com',
  password: 'clarens(+-1998)',
};

// user's register informations
/* eslint operator-linebreak: ["off"] */
const UserInformations: RegisterUser<RegisterForm<string, number>>['students'] =
  {
    Firstname: 'romeus',
    Lastname: 'clarens',
    Email: 'romeusclarens10@gmail.com',
    PassInitialisation: 'clarens(+-1998)',
    PassConfirmation: 'clarens(+-1998)',
  };

// the width of each tab in Tabs component
const TAB_WIDTH: string = '50%';
const TAB_COLOR: string = 'white';

// value of the label placement of the radio button
const LABEL_VALUE: EXACTNESS = 'start';

// interface IAuthenticationProps {}

const Authentication: FC = () => {
  const [value, setValue] = React.useState<number>(0);
  const [selectedValue, setSelectedValue] = React.useState<
    string | undefined
  >();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target && (event.target as { value: string });

    setSelectedValue(target.value);
  };

  const controlProps: ControlPropType = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChangeRadio,
    value: item,
    name: 'radio_button',
    inputProps: { 'aria-label': item },
  });

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        minWidth="100vw"
      >
        <Box pt={3}>
          <Paper elevation={3} sx={{ borderRadius: '10%' }}>
            <Box
              sx={{
                width: '360px',
                bgcolor: orange[900],
                borderRadius: '10%',
              }}
            >
              <Box sx={{ maxHeight: '100px' }}>
                <Tabs
                  centered
                  value={value}
                  onChange={handleChange}
                  aria-label="tabs for login and register"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: green[900],
                    borderTopLeftRadius: '38px',
                    borderTopRightRadius: '38px',
                    color: '#fafafa',
                    '& .Mui-selected': {
                      color: '#fafafa !important',
                      bgcolor: green[800],
                    },
                    '& .MuiTabs-indicator': {
                      bgcolor: orange[900],
                    },
                  }}
                >
                  <Tab
                    icon={<AccountCircleIcon fontSize="large" />}
                    label="LOGIN"
                    iconPosition="bottom"
                    sx={{
                      width: TAB_WIDTH,
                      color: TAB_COLOR,
                    }}
                    disableRipple
                  />
                  <Tab
                    icon={<KeyIcon fontSize="large" />}
                    label="REGISTER"
                    iconPosition="bottom"
                    sx={{
                      width: TAB_WIDTH,
                      color: TAB_COLOR,
                    }}
                    disableRipple
                  />
                </Tabs>
              </Box>
              <Box
                sx={{
                  pt: 1,
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <Box pl={2} sx={{ pt: '8px' }}>
                  <Typography sx={{ color: '#fafafa', fontWeight: 'bold' }}>
                    Login with
                  </Typography>
                </Box>
                <Box>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-form-control-label-placement"
                      name="position"
                      defaultValue="top"
                    >
                      <FormControlLabel
                        value="top"
                        control={
                          <Radio
                            color="success"
                            {...controlProps('a')}
                            sx={{ color: '#fafafa' }}
                          />
                        }
                        label="Email"
                        labelPlacement={LABEL_VALUE}
                        sx={{
                          '& .MuiFormControlLabel-label': {
                            color: '#fafafa',
                            fontWeight: 'bold',
                          },
                        }}
                      />
                      <FormControlLabel
                        value="start"
                        control={
                          <Radio
                            color="success"
                            {...controlProps('b')}
                            sx={{ color: '#fafafa' }}
                          />
                        }
                        label="Phone"
                        labelPlacement={LABEL_VALUE}
                        sx={{
                          '& .MuiFormControlLabel-label': {
                            color: '#fafafa',
                            fontWeight: 'bold',
                          },
                        }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogIn {...userCredentials} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Register {...UserInformations} />
              </TabPanel>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default Authentication;
