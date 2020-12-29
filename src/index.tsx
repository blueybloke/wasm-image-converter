import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { ThemeProvider, createMuiTheme, Theme } from '@material-ui/core';
import { yellow, amber } from '@material-ui/core/colors';

const theme: Theme = createMuiTheme({
  // TODO: Add theme changes here.
  palette: {
    primary: yellow,
    secondary: amber,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Register service worker
serviceWorkerRegistration.register();
