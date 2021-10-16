import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/authOperations';

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
  };

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Registration
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <p>Введите имя</p>
          <input
            onInput={handleChange}
            name="name"
            value={state.name}
            type="text"
          />
        </label>
        <label htmlFor="">
          <p>Введите email</p>
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
          <button>Registration</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
