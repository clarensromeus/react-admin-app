import * as React from 'react';
import { FC } from 'react';
import { Box } from '@mui/material';

type userLoginProps<S> = {
  username?: S;
  password?: S;
};

const UserLogin: FC<userLoginProps<string>> = ({ username, password }) => {
  return (
    <div>
      <Box>dhd</Box>
    </div>
  );
};

export default UserLogin;

// default props of the component
UserLogin.defaultProps = {
  username: 'clarens',
  password: 'clarens(+-1998)',
};
