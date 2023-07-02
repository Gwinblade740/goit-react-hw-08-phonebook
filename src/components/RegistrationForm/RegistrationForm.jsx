import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { register } from '../../redux/Operation';
import {
  Form,
  Label,
  Input,
  Span,
  Button,
  Title,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    const form = e.target;
    e.preventDefault();
    dispatch(
      register({
        name: form.login.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
    navigate('/contacts', { replace: true });
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Span>Login</Span>
          <Input type="text" name="login" required />
        </Label>
        <Label>
          <Span>Email</Span>
          <Input type="email" name="email" required />
        </Label>
        <Label>
          <Span>Password</Span>
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Registration</Button>
      </Form>
    </>
  );
};
export default RegistrationForm;
