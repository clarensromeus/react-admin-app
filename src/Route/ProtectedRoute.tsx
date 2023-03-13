import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import __ from 'lodash';

const isLoggedIn: boolean = false;

const ProtectedRoute = () => {
  const isAuth: React.ReactElement | null =
    __.isBoolean(isLoggedIn) && isLoggedIn ? (
      <Outlet />
    ) : (
      Navigate({ to: '/login' })
    );

  return isAuth;
};

export default ProtectedRoute;

// this route makes all other routes of the project protected and gives access to
// only authenticated users to all routes of the project
