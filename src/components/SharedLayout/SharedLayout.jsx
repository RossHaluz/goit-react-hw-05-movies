import { Outlet } from 'react-router-dom';
import { Container, NavigationLink, Navigation } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Navigation>

      <Outlet />
    </Container>
  );
};

export default SharedLayout;
