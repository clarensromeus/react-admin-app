// internal imports of sources
import * as React from 'react';
import { FC } from 'react';
// external imports of sources
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import amber from '@mui/material/colors/amber';
// internal crafted components imports
import UserLogin from '../components/confirmation/LogIn/index';

type mixed<D, H> = string | number | D | H;

interface Log_InProps {
  username?: string;
  password?: mixed<'_', '-'>;
}

const LogIn: FC<Log_InProps> = ({ username, password }) => {
  return (
    <>
      <Container sx={{ bgcolor: amber, width: '100vh' }}>
        <Box component="div" className="login-user">
          hi everybody, so how is it going
          <Typography>
            we are not alone as many people are with us instantly
          </Typography>
          <Typography sx={{ color: 'red' }}>
            {' '}
            here
            <span>{username}</span>
          </Typography>
        </Box>
      </Container>
      <UserLogin />
    </>
  );
};

LogIn.defaultProps = {
  username: 'romeus clarens',
  password: `clarens_-${1998}`,
};

export default LogIn;
