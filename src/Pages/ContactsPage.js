import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { fetchContacts } from '../redux/contacts/contactsOperation';
import { getVisibleContacts } from '../redux/contacts/contactsSelectors';
import Filter from '../components/Filter';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <>
      <ContactForm />
      {visibleContacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>There are no contacts here yet</p>
      )}
    </>
  );
};

export default ContactsPage;
