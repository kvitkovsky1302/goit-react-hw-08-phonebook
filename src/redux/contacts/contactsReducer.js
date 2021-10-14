import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contactsActions';
import { fetchContacts, addContact, deleteContact } from './contactsOperation';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
