// ThemeProvider.js
import { useEffect, useMemo, useState } from 'react';
import {
  Button,
  createTheme,
  ThemeProvider as MuiThemeProvider,
  useTheme as useMuiTheme,
} from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useTheme as useNextTheme } from 'next-themes';
import darkTheme from '@/components/themes/dark';
import lightTheme from '@/components/themes/light';
import commonThemeConfig from '@/components/themes/common';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactNode } from 'react';

export const useTheme = (defaultTheme = 'dark') => {
  const [themeName, setTheme] = useState(defaultTheme);

  return {
    setTheme,
    themeName,
  };
};

export const ThemeSwitchButton = () => {
  const { themeName, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log('pressed!!!', themeName);
    if (themeName === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={toggleTheme}>
      Switch to {themeName === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  );
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { themeName } = useTheme();

  // Create a Material-UI theme based on the Next.js theme
  const muiTheme = useMemo(() => {
    if (themeName === 'dark') {
      return createTheme({ ...commonThemeConfig, ...darkTheme });
    } else {
      return createTheme({ ...commonThemeConfig, ...lightTheme });
    }
  }, [themeName]);

  console.log(`themeName: ${themeName}`, muiTheme);

  useEffect(() => {
    // Remove the server-side injected CSS (for Material-UI)
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <EmotionThemeProvider theme={muiTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
