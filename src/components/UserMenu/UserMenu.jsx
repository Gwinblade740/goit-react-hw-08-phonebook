import { useDispatch, useSelector } from 'react-redux';

import { selectName, selectLogIn } from '../../redux/selector';
import { logout } from '../../redux/Operation';
import { Button, Text, Container } from './UserMenu.styled';

export const UserMenu = () => {
  const loginIn = useSelector(selectLogIn);
  const dispath = useDispatch();

  const name = useSelector(selectName);
  const showName = () => {
    if (name === null) {
      return;
    }
    return `Welcom, ${name}`;
  };
  return (
    loginIn && (
      <Container>
        <Text> {showName()}</Text>
        <Button type="button" onClick={() => dispath(logout())}>
          Log out
        </Button>
      </Container>
    )
  );
};
