import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/Operation';
import { Form, Label, Input, Span, Button, Title } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(login({ email: form.email.value, password: form.password.value }));
    form.reset();
    navigate('/contacts', { replace: true });
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Span>Email</Span>
          <Input type="email" name="email" required />
        </Label>
        <Label>
          <Span>Password</Span>
          <Input type="password" name="password" required />
        </Label>
        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};
export default LoginForm;
