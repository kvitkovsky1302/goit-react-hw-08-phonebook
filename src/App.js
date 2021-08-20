import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleNameChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  formSubmitHandler = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} onInputChange={this.handleNameChange} />
        {visibleContacts.length > 0 && (
          <ContactList contacts={visibleContacts} />
        )}
        {/* <ul>
          {visibleTodos.length > 0 &&
            visibleTodos.map(({ id, name, number }) => (
              <li key={id}>
                {name} {number}
              </li>
            ))}
        </ul> */}
      </div>
    );
  }
}

export default App;
