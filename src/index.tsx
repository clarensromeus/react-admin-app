// internal and external imports of sources
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Theme = createTheme();

// upgrading to react 18
const container = document.getElementById('root');
const root = createRoot(container!); //          createRoot(container!) if you use TypeScript
root.render(
  <ThemeProvider theme={Theme}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
