// internal imports of sources
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// internal crafted imports of sources
import App from './App';
import ConstructRouter from './pickRouter';
import reportWebVitals from './reportWebVitals';

const Theme = createTheme();
const queryClient = new QueryClient();

// upgrading to react 18
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <ThemeProvider theme={Theme}>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
        <RouterProvider router={ConstructRouter} />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
);

reportWebVitals();
