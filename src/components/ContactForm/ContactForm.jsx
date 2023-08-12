import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk, getContactsThunk } from 'redux/contactsThunk';

import { Form, Input, Button } from './ContactForm.styled';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  const handleChange = evt => {
    const { name, value } = evt.target;
    name === 'name' ? setName(value) : setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const contacts = useSelector(state => state.contacts.items);
  return (
    <Form
      onSubmit={e => {
        const notifly = () =>
          Notiflix.Notify.warning(`${name} is alredy in contacts`);
        const contact = {
          name: name,
          number: number,
        };
        e.preventDefault();
        if (
          contacts.some(
            value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
          )
        ) {
          notifly();
        } else {
          dispatch(addContactsThunk(contact));
          reset();
        }
      }}
    >
      <Input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />{' '}
      <Input
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        placeholder="Number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
     
      <Button type="submit">
        Add
      </Button>
    </Form>
  );
};
