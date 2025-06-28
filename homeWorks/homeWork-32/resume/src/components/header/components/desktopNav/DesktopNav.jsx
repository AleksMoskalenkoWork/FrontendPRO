import { NavLink } from 'react-router';
import Box from '@mui/material/Box';
import ThemeToggler from '../../../core/themeToggler/ThemeToggler';
import Link from '@mui/material/Link';

export default function DesktopNav() {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex', lg: 'flex' },
          alignItems: 'center',
        }}
      >
        <ThemeToggler />
        <NavLink to="/">
          <Link>Головна</Link>
        </NavLink>
        {/* <Link to="todo">Todo</Link>
        <Link to="swapi">Swapi</Link> */}
      </Box>
    </>
  );
}
