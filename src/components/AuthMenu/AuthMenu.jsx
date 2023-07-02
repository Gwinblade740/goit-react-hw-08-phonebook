import { useSelector } from 'react-redux';

import { selectLogIn } from '../../redux/selector';
import { Link, Container } from './AuthMenu.styled';

export const AuthMenu = () => {
  const loginIn = useSelector(selectLogIn);
  return (
    !loginIn && (
      <Container>
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login</Link>
      </Container>
    )
  );
};
