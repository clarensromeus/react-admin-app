import * as React from 'react';
import { FC } from 'react';

interface userLoginProps<S> {
  username: S;
  password: S;
}

const UserLogin: FC<userLoginProps<string>> = ({ username, password }) => {
  return (
    <div>
      <span>let us go</span>
    </div>
  );
};

export default UserLogin;
