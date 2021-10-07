import { useEffect, Suspense } from 'react';
import { Switch } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { getItems } from './redux/contactsSelectors';
import styles from './App.module.css';
import { fetchContacts } from './redux/contactsOperation';
import PublicRoute from './components/PublicRoute/PublicRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HomePage from './Pages/HomePage';
import LogInPage from './Pages/LogInPage';
import RegistrationPage from './Pages/RegistrationPage';
import { getCurrentUser } from './redux/auth/authOperations';

function App() {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Switch>
          <PublicRoute path="/" exact component={HomePage} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactForm}
          />
          <PublicRoute
            restricted
            path="/login"
            redirectTo="/contacts"
            component={LogInPage}
          />
          <PublicRoute
            redirectTo="/contacts"
            restricted
            path="/registration"
            exact
            component={RegistrationPage}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

//компонент навигации логин, регистрация, хом
//когда юзер авторизирован в навигацию вместо кнопок логин и регистрация вывести кнопку логаут
//контакты в один компонент и рендерить на странице контактс
