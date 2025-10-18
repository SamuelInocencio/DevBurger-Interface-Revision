import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import AppProvider from './hooks';
import { router } from './routes';
import GlobalStyle from './styles/globalStyles';
import { standardTheme } from './styles/themes/standard.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <RouterProvider router={router} />
        <GlobalStyle />
        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
