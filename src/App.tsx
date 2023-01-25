// internal imports of sources
import React, { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// external imports of sources
import Container from '@mui/material/Container';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

// internal crafted components imports
import LogIn from './Route/LogIn';

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
        <LogIn />
      </Container>
    </div>
  );
};

export default App;
