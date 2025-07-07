import Box from '@mui/material/Box';
import ThemeToggler from '../../core/themeToggler/ThemeToggler';
import { NavLink } from 'react-router';
import Button from '@mui/material/Button';

export default function DesktopNav() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Box>
          <ThemeToggler />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          <Button
            component={NavLink}
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            underline="none"
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="hotels"
            underline="none"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Hotels
          </Button>
          <Button
            component={NavLink}
            to="about"
            underline="none"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </Button>
        </Box>
      </Box>
    </>
  );
}
