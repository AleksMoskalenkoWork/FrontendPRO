import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
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
      </Box>
      <Footer />
    </>
  );
}

export default Root;
