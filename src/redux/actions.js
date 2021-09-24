import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const contacts = () => ({
  type: 'contacts',
  payload: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
});

export const changeFilter = createAction('changeFilter');

export const addContact = createAction('addContact', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction('deleteContact');
