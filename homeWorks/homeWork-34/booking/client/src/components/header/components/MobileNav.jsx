import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router';
import {
  SwipeableDrawer,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: '64px',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton
          size="large"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>

        <SwipeableDrawer
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          anchor="left"
        >
          <Box
            sx={{
              width: '250px',
              paddingTop: '64px',
              backgroundColor:
                theme.palette.mode === 'light'
                  ? theme.palette.background.default
                  : theme.palette.background.paper,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem>
                <Typography
                  component={Link}
                  to="/"
                  underline="none"
                  color="textPrimary"
                >
                  Home
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component={Link}
                  to="hotels"
                  underline="none"
                  color="textPrimary"
                >
                  Hotels
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component={Link}
                  to="about"
                  underline="none"
                  color="textPrimary"
                >
                  About
                </Typography>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
      </Box>
    </>
  );
}
