import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { getItems } from './redux/selectors';
import styles from './App.module.css';

function App() {
  const contacts = useSelector(getItems);

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
