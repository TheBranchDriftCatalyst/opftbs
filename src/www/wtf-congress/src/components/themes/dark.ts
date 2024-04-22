import { deepPurple, pink, purple } from '@mui/material/colors';

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: purple[800],
    },
    secondary: {
      main: deepPurple[500],
    },
    error: {
      main: '#ff5252',
    },
    warning: {
      main: '#ffb74d',
    },
    info: {
      main: '#64b5f6',
    },
    success: {
      main: '#81c784',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
      disabled: '#666666',
      hint: '#888888',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // ... other typography settings
  },
  // ... other theme settings
};

export default darkTheme;
