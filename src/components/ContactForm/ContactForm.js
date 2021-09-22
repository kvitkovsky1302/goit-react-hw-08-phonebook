import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import styles from './ContactForm.module.css';

function ContactForm({
  onSubmit,
  name,
  number,
  handleChangeName,
  handleChangeNumber,
  handleSubmit,
}) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChangeName = e => {
  //   setName(e.target.value);
  // };

  // const handleChangeNumber = e => {
  //   setNumber(e.target.value);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(e);

  //   onSubmit(name, number);
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form className={styles.form} onSubmit={e => handleSubmit(e)}>
      <label className={styles.label}>
        Name
        <input
          className={styles.inputForm}
          type="text"
          name="name"
          value={name}
          onChange={e => handleChangeName(e)}
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
          onChange={e => handleChangeNumber(e)}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state?.cotacts?.name,
  number: state?.cotacts?.number,
});

const mapDispatchToProps = dispatch => ({
  handleChangeName: e => dispatch(actions.changeName(e)),
  handleChangeNumber: e => dispatch(actions.changeNumber(e)),
  handleSubmit: e => {
    e.preventDefault();
    dispatch(actions.changeName(''));
    dispatch(actions.changeNumber(''));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
