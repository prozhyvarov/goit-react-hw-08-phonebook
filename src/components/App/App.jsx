import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { refreshUserThunk } from 'redux/user/userThunk';
import { PublicRoute } from 'components/Public/PublicRoute';
import { PrivateRoute } from 'components/Private/PrivateRoute';

import Navigation from 'components/Navigation/Navigation';

import { Container } from '../App/App.styled';

const Register = lazy(() => import('../../pages/SingUp/SignUp'));
const Login = lazy(() => import('../../pages/Login/Login'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
