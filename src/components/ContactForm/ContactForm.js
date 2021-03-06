import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperation';
import { getItems } from '../../redux/contacts/contactsSelectors';
import styles from './ContactForm.module.css';
import { store } from 'react-notifications-component';

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

  const showNotification = () => {
    store.addNotification({
      message: `Name: ${name} or Number: ${number} is already in contacts`,
      type: 'danger',
      insert: 'top',
      container: 'top-center',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
        pauseOnHover: true,
      },
    });
  };

  const formSubmitHandler = (name, number) => {
    if (!repeatName(name) && !repeatNumber(number)) {
      onSubmit(name, number);
    } else {
      showNotification();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    formSubmitHandler(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={`${styles.grid} ${styles.align__item}`}>
      <div className={styles.register}>
        <h2>Contacts</h2>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
          <div className={styles.form__field}>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChangeName}
              pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
              title="?????? ?????????? ???????????????? ???????????? ???? ????????, ??????????????????, ???????? ?? ????????????????. ???????????????? Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ?? ??. ??."
              required
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.form__field}>
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={number}
              onChange={handleChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="?????????? ???????????????? ???????????? ???????????????? ???????? ?? ?????????? ?????????????????? ??????????????, ????????, ?????????????? ???????????? ?? ?????????? ???????????????????? ?? +"
              required
              placeholder="Enter your tel number"
            />
          </div>
          <div className={styles.form__field}>
            <input className={styles.input} type="submit" value="Add contact" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
