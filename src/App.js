// import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import styles from './App.module.css';

function App({ contacts }) {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });

  // const repeatName = newName => {
  //   return contacts.find(contact => contact.name === newName);
  // };

  // const formSubmitHandler = (name, number) => {
  //   if (!repeatName(name)) {
  //     const contact = {
  //       id: shortid.generate(),
  //       name,
  //       number,
  //     };
  //     setContacts(prev => [contact, ...prev]);
  //   } else {
  //     alert(`${name} is already in contacts`);
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
