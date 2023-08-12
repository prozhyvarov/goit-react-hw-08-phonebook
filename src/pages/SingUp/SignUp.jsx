import { Label, Button, Form, Input, Container } from './SignUp.styled';
import { signUpThunk } from 'redux/user/userThunk';
const { useDispatch } = require('react-redux');
const { useState } = require('react');

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
  const handleOnSubmit = evt => {
    evt.preventDefault();

    dispatch(signUpThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
        setName('');
      });
  };
  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Label>User Name</Label>
        <Input
          onChange={handleChange}
          name="name"
          value={name}
          type="text"
          placeholder="Enter your  name"
        />
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
          minlength="9"
          required
        />

        <Button type="submit">Sign up</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
