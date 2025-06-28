import { Outlet } from 'react-router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Box } from '@mui/material';

function Root() {
  return (
    <>
      <Box sx={{ paddingTop: '64px' }}>
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default Root;
