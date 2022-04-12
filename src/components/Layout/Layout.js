import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from 'components/AppBar';
import { Container } from './Layout.styled';

function Layout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback="Loading. Wait a moment, please  ...">
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default Layout;
