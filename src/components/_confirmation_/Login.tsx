import * as React from 'react';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';

type mixed<D, H> = string | number | D | H;

interface Log_InProps {
  username: string;
  password: mixed<'_', '-'>;
}

const LogIn: FC<Log_InProps> = ({ username, password }) => {
  return (
    <div>
      <Box component="div" className="login-user">
        hi everybody, so how is it going
        <Typography>
          we are not alone as many people are with us instantly
        </Typography>
      </Box>
    </div>
  );
};

export default LogIn;
