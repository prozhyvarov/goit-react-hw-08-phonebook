import InfoUser from 'components/InfoUser/InfoUser';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavMain, NavLink } from './Navigation.styled';

const { useSelector } = require('react-redux');
const { selectToken, selectUser } = require('redux/user/userSelect');
// const user = useSelector(selectUser);
const Navigation = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken) ?? '';

  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <NavLink to="/">Phonebook</NavLink>
          {!user && (
            <NavMain>
              {token && (
                <NavLink to="/contacts">
                  Contacts
                </NavLink>
              )}
              <NavLink to="/signup">
                Sign Up
              </NavLink>
              <NavLink to="/login">
                Login
              </NavLink>
            </NavMain>
          )}

          <InfoUser className="d-flex flex-column" />
        </Container>
      </Navbar>
      <Container className="align-items-center d-flex flex-column justify-content-center">
        {user ? (
          <h1>Welcome {user.name} your contacts</h1>
        ) : (
          <h1>Welcome guest please login or sing up</h1>
        )}
      </Container>
    </>
  );
};

export default Navigation;
