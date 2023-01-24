import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// for mui props
import Container from '@mui/material/Container';
import { green, blue, purple } from '@mui/material/colors';
import { ErrorBoundary } from 'react-error-boundary';
import {
  atom,
  selector,
  selectorFamily,
  atomFamily,
  useRecoilState,
  useRecoilRefresher_UNSTABLE,
} from 'recoil';
import LogIn from './components/_confirmation_/Login';
import './App.css';

// this is where type and interfaces and types are typically located
type student = {
  key: string;
  default: string;
};

// here all function and defined details of this page are going to be located
const name = atom({
  key: 'name',
  default: 'emmanuelle hortil',
});

const students = selector({
  key: 'students',
  get: async ({ get }) => {
    const res = await get(name);
    return res;
  },
});

const a = 10;

/*
**
 ! @params
 * correct this line of code
 ? dont't use any api at the root level instead do that at the component level just to work fine
**
*/

// this is the main app code
const App: FC = () => {
  return (
    <div className="App">
      <Container sx={{ bgcolor: 'blue' }}>
        <Box className="learn react" sx={{ flex: 1 }}>
          <Typography fontWeight="bold">
            see the best of our compagny
          </Typography>
          <p>learn react today</p>
        </Box>
        <LogIn username="slim shady" password="clarens1998" />
      </Container>
    </div>
  );
};

export default App;
