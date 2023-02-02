// internal imports of sources
import * as React from 'react';
import { FC } from 'react';
// external imports of sources
import Box from '@mui/material/Box';
// internal crafted components imports
import UserLogin from '../components/confirmation/LogIn/index';

const user = {
  username: 'romeus clarens',
  password: 'clarens(+-1998)',
};

const LogIn: FC = () => {
  return (
    <div>
      <Box>
        <UserLogin {...user} />
      </Box>
    </div>
  );
};

export default LogIn;
