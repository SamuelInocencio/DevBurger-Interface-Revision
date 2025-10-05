import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Login } from './containers/Login/index.jsx';
import GlobalStyle from './styles/globalStyles';
import { standardTheme } from './styles/themes/standard.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
);
