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
          justifyContent: 'center',
          gap: 2,
          width: '75%',
        }}
      >
        <Link href="/">Home</Link>
        <Link href="todo">Todo</Link>
        <Link href="swapi">Swapi</Link>
      </Box>
      <Box sx={{ marginLeft: 'auto' }}>
        <ThemeToggler />
      </Box>
    </>
  );
}
