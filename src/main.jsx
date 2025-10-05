import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { standardTheme } from './styles/themes/standard.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
);
