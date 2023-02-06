import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, NavigationLink, Navigation } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Navigation>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
