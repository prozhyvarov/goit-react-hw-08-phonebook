import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { delContactsThunk } from 'redux/contactsThunk';
import { Button, List, Item } from './ContactList.styled';

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return (
    <List>
      {listContact.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};
