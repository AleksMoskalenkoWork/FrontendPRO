import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MobileNav from './components/MobileNav';
import DesktopNav from './components/DesktopNav';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

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
            }}
          >
            <img
              src="/logo.svg"
              alt="BookingLogo"
              style={{
                height: 40,

                color: theme.palette.primary.main,
              }}
            />
          </Typography>
          <MobileNav />
          <Box>
            <Typography
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <img
                src="/logo_small.svg"
                alt="BookingLogo"
                style={{
                  height: 40,
                  width: 'auto',
                  color: theme.palette.primary.main,
                }}
              />
            </Typography>
          </Box>
          <DesktopNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
