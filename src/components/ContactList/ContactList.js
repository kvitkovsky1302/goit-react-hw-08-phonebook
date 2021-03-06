import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import { getVisibleContacts } from '../../redux/contacts/contactsSelectors';
import { deleteContact } from '../../redux/contacts/contactsOperation';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <div>
            <p>{name}</p>
            <p>{number}</p>
          </div>
          <button
            className={styles.btnContact}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
