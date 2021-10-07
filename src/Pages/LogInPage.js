import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/authOperations';

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
    //   const { name, email, password } = state;
    dispatch(login(state));
  };

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Login
      </h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Введите логин</p>
          <input
            onInput={handleChange}
            value={state.email}
            name="email"
            type="text"
          />
        </label>
        <label htmlFor="">
          <p>Введите пароль</p>
          <input
            onInput={handleChange}
            value={state.password}
            name="password"
            type="password"
          />
        </label>
        <div style={{ marginTop: '20px' }}>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LogInPage;
