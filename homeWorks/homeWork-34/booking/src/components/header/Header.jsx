import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MobileNav from './components/MobileNav';
import DesktopNav from './components/DesktopNav';
import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
              src="../../../public/logo.svg"
              alt="BookingLogo"
              style={{
                height: 40,
                color: theme.palette.primary.main,
              }}
            />
          </Typography>
          <MobileNav />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
              src="../../../public/logo_small.svg"
              alt="BookingLogo"
              style={{
                height: 40,
                color: theme.palette.primary.main,
              }}
            />
          </Typography>
          <DesktopNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
