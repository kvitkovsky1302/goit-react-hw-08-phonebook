import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getContacts = () => {
  return axios.get('/contacts').then(({ data }) => data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};

const registerNewUser = async credentials => {
  return axios.post('/users/signup', credentials).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

const logInUser = async credentials => {
  return axios.post('/users/login', credentials).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

const logOutUser = () => {
  axios.post('/users/logout');
  token.unset();
};

const getCurrentUser = persistedToken => {
  token.set(persistedToken);
  return axios.get('users/current').then(({ data }) => data);
};

const contactsAPI = {
  getContacts,
  addContact,
  deleteContact,
  registerNewUser,
  logInUser,
  logOutUser,
  getCurrentUser,
};

export default contactsAPI;
