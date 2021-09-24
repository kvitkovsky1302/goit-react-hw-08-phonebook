import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import * as actions from '../../redux/actions';

function ContactList() {
  const getVisibleContacts = (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter),
    );
  };

  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

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
