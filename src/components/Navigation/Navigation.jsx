import InfoUser from 'components/InfoUser/InfoUser';

import {
  NavMain,
  NavLink,
  NavLinkMain,
  Container,
  NavUserAuth,
  TextContainer,
} from './Navigation.styled';

const { useSelector } = require('react-redux');
const { selectToken, selectUser } = require('redux/user/userSelect');

const Navigation = () => {
  const user = useSelector(selectUser);

  const token = useSelector(selectToken) ?? '';

  return (
    <>
      <NavMain>
        <Container>
          <NavLinkMain to="/">Phonebook</NavLinkMain>
          {!user && (
            <NavUserAuth>
              {token && <NavLink to="/contacts">Contacts</NavLink>}
              <NavLink to="/signup">Sign Up</NavLink>
              <NavLink to="/login">Login</NavLink>
            </NavUserAuth>
          )}

          <InfoUser/>
        </Container>
      </NavMain>
      <TextContainer>
        {user ? (
          <h1>Hello {user.name}! Welcome to your contacts.</h1>
        ) : (
          <h1>Welcome guest! Please login or sing up.</h1>
        )}
      </TextContainer>
    </>
  );
};

export default Navigation;
