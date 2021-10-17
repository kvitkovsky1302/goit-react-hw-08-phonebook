import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../redux/auth/authOperations';
import styles from './LoginPage.module.css';

function LogInPage() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <div className={`${styles.grid} ${styles.align__item}`}>
      <div className={styles.register}>
        <h2
        // style={{
        //   textAlign: 'center',
        // }}
        >
          Login
        </h2>

        <form
          action=""
          method="post"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          {/* <form action="" onSubmit={handleSubmit}> */}
          {/* <label htmlFor=""> */}
          {/* <p>Введите логин</p> */}
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
          {/* </label> */}
          {/* <label htmlFor=""> */}
          {/* <p>Введите пароль</p> */}
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
            <input className={styles.input} type="submit" value="Sign Up" />
            {/* <button>Login</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
