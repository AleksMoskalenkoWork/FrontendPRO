import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import { Box, Container, useTheme } from '@mui/material';

function Root() {
  const theme = useTheme();
  return (
    <>
      <Header />
      <Box
        sx={{
          with: '100vw',
          height: '100vh',
          backgroundColor:
            theme.palette.mode === 'light'
              ? theme.palette.background.default
              : theme.palette.background.paper,
        }}
      >
        <Container
          sx={{
            paddingTop: '64px',
            overflowY: 'auto',
            backgroundColor:
              theme.palette.mode === 'light'
                ? theme.palette.background.default
                : theme.palette.background.paper,
          }}
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
}

export default Root;
