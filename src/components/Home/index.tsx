// internal imports of sources
import * as React from 'react';
// external imports of sources
import { FC } from 'react';
// internal crafted imports of sources like created components and so ...
import NavBar from './NavBar/index';
import Authentication from '../confirmation/index';

const Home: FC = () => {
  return (
    <>
      <NavBar />
      <Authentication />
    </>
  );
};

export default Home;
