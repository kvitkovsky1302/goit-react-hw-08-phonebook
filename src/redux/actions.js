export const contacts = () => ({
  type: 'contacts',
  payload: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
});

export const filter = () => ({ type: 'filter', payload: '' });

export const changeName = e => {
  return {
    type: 'changeName',
    payload: e.target.value,
  };
};

export const changeNumber = e => ({
  type: 'changeNumber',
  payload: e.target.value,
});

export const Submit = e => ({
  type: 'Submit',
  payload: e.target.value,
});
