import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, delContacts, getContacts } from '../components/Api/contactsApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/allContacts',
  async (_, { reject }) => {
    try {
      const data = getContacts();
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
    async (contact, { reject }) => {
    //   console.log(contact);
    try {
        const data = addContacts(contact);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const delContactsThunk = createAsyncThunk(
  'contacts/delContact',
  async (id, { reject }) => {
    try {
      const data = delContacts(id);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);
