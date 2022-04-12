import { Link, Nav } from './Navigation.styled';

function Navigation() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
    </Nav>
  );
}

export default Navigation;
