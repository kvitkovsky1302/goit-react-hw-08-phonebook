import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import styles from './RegistrationPage.module.css';

function RegistrationPage() {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register(state));
    setState({
      email: '',
      password: '',
      name: '',
    });
  };

  return (
    <div className={`${styles.grid} ${styles.align__item}`}>
      <div className={styles.register}>
        <h2>Registration</h2>
        <form
          action=""
          method="post"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.form__field}>
            <input
              className={styles.input}
              onInput={handleChange}
              name="name"
              value={state.name}
              type="text"
              placeholder="enter your name"
            />
          </div>
          <div className={styles.form__field}>
            <input
              className={styles.input}
              onInput={handleChange}
              value={state.email}
              name="email"
              type="email"
              placeholder="info@mailaddress.com"
            />
          </div>
          <div className={styles.form__field}>
            <input
              className={styles.input}
              onInput={handleChange}
              value={state.password}
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          {/* </label> */}
          <div className={styles.form__field}>
            <input
              className={styles.input}
              type="submit"
              value="Registration"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
