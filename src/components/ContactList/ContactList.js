import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import { getVisibleContacts } from '../../redux/contactsSelectors';
import { deleteContact } from '../../redux/contactsOperation';
// import * as actions from '../../redux/contactsActions';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          {name} --- {number}
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
