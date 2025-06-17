import { Outlet } from 'react-router';
import Header from '../components/Header';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
