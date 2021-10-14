import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
// import Section from '../components/Section';

const ContactsPage = () => {
  return (
    <>
      {/* <Section title="Add contact"> */}
      <ContactForm />
      {/* </Section> */}
      {/* <Section title="My contacts"> */}
      <Filter />
      <ContactList />
      {/* </Section> */}
    </>
  );
};

export default ContactsPage;
