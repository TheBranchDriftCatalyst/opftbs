import { AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeSwitchButton } from '@/components/ThemeProvider';

export const HeaderNavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Header</Typography>
        <ThemeSwitchButton />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavBar;
