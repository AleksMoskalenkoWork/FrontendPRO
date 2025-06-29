import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import ThemeToggler from '../../../core/themeToggler/ThemeToggler';
import { Drawer, List, ListItem, useTheme } from '@mui/material';

export default function MobileNav() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              height: '100%',
              width: '50%',
              position: 'fixed',
              top: '56px',
              background:
                theme.palette.mode === 'light'
                  ? theme.palette.primary.main
                  : 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #1e1e1e',
            }}
          >
            <List>
              <ListItem>
                <Link onClick={handleCloseNavMenu} href="/">
                  Головна
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={handleCloseNavMenu} href="todo">
                  Todo
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={handleCloseNavMenu} href="swapi">
                  Swapi
                </Link>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
