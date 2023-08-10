import React, { useEffect } from 'react';
import ContactFrom from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { Container, Title, SubTitle } from './App.styled';
import Filter from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/user/userThunk';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from 'components/Public/PublicRoute';
import SignUp from 'pages/SignUp';
import Login from 'pages/Login';
import { PrivateRoute } from 'components/Private/PrivateRoute';
import { Contacts } from 'pages/Contacts';
import Navigation from 'components/Navigation/Navigation';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
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
    </>

    // <Container>
    //   <Title>Phonebook</Title>
    //   <ContactFrom />
    //   <SubTitle>Contacts</SubTitle>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
};
export default App;
