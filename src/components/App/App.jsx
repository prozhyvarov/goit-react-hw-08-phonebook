import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { refreshUserThunk } from 'redux/user/userThunk';
import { PublicRoute } from 'components/Public/PublicRoute';
import { PrivateRoute } from 'components/Private/PrivateRoute';

import Navigation from 'components/Navigation/Navigation';
import SignUp from 'pages/SingUp/SignUp';
import Login from 'pages/Login/Login';
import Contacts from 'pages/Contacts/Contacts';

import { Container } from '../App/App.styled';

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
          <Route path="/signup" element={<SignUp />} />
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
