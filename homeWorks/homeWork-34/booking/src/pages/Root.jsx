import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import { Box } from '@mui/material';

function Root() {
  return (
    <>
      <Header />
      <Box
        sx={{
          position: 'fixed',
          top: '64px',
          bottom: '120px',
          left: 0,
          right: 0,
          overflowY: 'auto',
        }}
      >
        <Outlet />
      </Box>{' '}
    </>
  );
}

export default Root;
