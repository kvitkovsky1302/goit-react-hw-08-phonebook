import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as types from './types';

export const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [payload, ...state];

    case types.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

export const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({ items, filter });

const reducer = combineReducers({ contacts: contactsReducer });

const store = createStore(reducer, composeWithDevTools());

export default store;
