import Box from '@mui/material/Box';
import ThemeToggler from '../../../core/themeToggler/ThemeToggler';
import Link from '@mui/material/Link';

export default function DesktopNav() {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <ThemeToggler />
        <Link href="/">Головна</Link>
        <Link href="todo">Todo</Link>
        <Link href="swapi">Swapi</Link>
      </Box>
    </>
  );
}
