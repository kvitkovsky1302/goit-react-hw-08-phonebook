import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { getItems } from './redux/contactsSelectors';
import styles from './App.module.css';
import { fetchContacts } from './redux/contactsOperation';

function App() {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && (
        <>
          <h2 className={styles.titleContacts}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}

export default App;
