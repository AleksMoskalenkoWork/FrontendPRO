import { Outlet } from 'react-router';
import Header from '../components/header/Header';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
