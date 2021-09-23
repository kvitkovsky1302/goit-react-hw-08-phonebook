import shortid from 'shortid';
import * as types from './types';

export const contacts = () => ({
  type: 'contacts',
  payload: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
});

// export const Submit = e => ({
//   type: 'Submit',
//   payload: e.target.value,
// });

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export const addContact = (name, number) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE_CONTACT,
  payload: contactId,
});
