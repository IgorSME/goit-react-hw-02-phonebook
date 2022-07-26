import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Contacts } from './ContactList.styled';

export function ContactList({ contacts, onDelete }) {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClick={() => onDelete(id)}
          ></ContactListItem>
        );
      })}
    </Contacts>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
