import Box from '@mui/material/Box';
import ThemeToggler from '../../core/themeToggler/ThemeToggler';
import MUILink from '@mui/material/Link';
import { NavLink } from 'react-router';

export default function DesktopNav() {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '75%',
        }}
      >
        <MUILink
          component={NavLink}
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
          underline="none"
        >
          Home
        </MUILink>
        <MUILink
          component={NavLink}
          to="hotels"
          underline="none"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Hotels
        </MUILink>
        <MUILink
          component={NavLink}
          to="about"
          underline="none"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </MUILink>
      </Box>
      <Box sx={{ marginLeft: 'auto' }}>
        <ThemeToggler />
      </Box>
    </>
  );
}
