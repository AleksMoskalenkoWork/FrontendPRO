import { Link } from 'react-router';
import Box from '@mui/material/Box';
import ThemeToggler from '../../../core/themeToggler/themeToggler';

export default function DesktopNav() {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <ThemeToggler />
        <Link to="/">Головна</Link>
        <Link to="todo">Todo</Link>
        <Link to="swapi">Swapi</Link>
      </Box>
    </>
  );
}
