import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import styles from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const repeatName = newName => {
    return contacts.find(contact => contact.name === newName);
  };

  const deleteContact = oldName => {
    setContacts(prev => prev.filter(contact => contact.name !== oldName));
  };

  const formSubmitHandler = (name, number) => {
    if (!repeatName(name)) {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      setContacts(prev => [contact, ...prev]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      {contacts.length > 0 && (
        <>
          <h2 className={styles.titleContacts}>Contacts</h2>
          <Filter filter={filter} onInputChange={handleChange} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </>
      )}
    </div>
  );
}

export default App;
