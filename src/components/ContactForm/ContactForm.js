import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOperation';
import { getItems } from '../../redux/contactsSelectors';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const contacts = useSelector(getItems);

  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(addContact({ name, number }));

  const repeatName = newName => {
    return contacts.find(contact => contact.name === newName);
  };

  const repeatNumber = newNumber => {
    return contacts.find(contact => contact.number === newNumber);
  };

  const formSubmitHandler = (name, number) => {
    if (!repeatName(name) && !repeatNumber(number)) {
      onSubmit(name, number);
    } else {
      alert(`${name} or ${number} is already in contacts`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    formSubmitHandler(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={e => handleSubmit(e)}>
      <label className={styles.label}>
        Name
        <input
          className={styles.inputForm}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.inputForm}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
