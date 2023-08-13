

import { useDispatch, useSelector } from 'react-redux';
import { delContactsThunk } from 'redux/contactsThunk';
import { Button, List, Item } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/user/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name + ' : ' + number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => {
                dispatch(delContactsThunk(id));
              }}
            >
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};


