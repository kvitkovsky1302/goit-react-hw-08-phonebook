import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contacts, filter } from '../redux/actions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
    name: '',
    number: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: { payload, ...state.contacts.items },
        },
      };

    case 'filter':
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: { payload },
        },
      };

    case 'changeName':
      return { ...state, contacts: { ...state.contacts, name: payload } };

    case 'changeNumber':
      return { ...state, contacts: { ...state.contacts, number: payload } };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
