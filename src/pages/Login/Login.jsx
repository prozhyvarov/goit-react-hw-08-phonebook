import Notiflix from 'notiflix';
import { Label, Button, Form, Input, Container } from './Login.styled';

const { useState } = require('react');
const { useDispatch } = require('react-redux');
const { loginThunk } = require('redux/user/userThunk');

const  Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() =>
        Notiflix.Notify.failure(`Incorrect login or password`)
      )
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Label>Email address</Label>
        <Input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          placeholder="Enter email"
        />
        <Label>Password</Label>
        <Input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
        />
        <Button type="submit">Log in</Button>
      </Form>
    </Container>
  );
};

export default Login;
