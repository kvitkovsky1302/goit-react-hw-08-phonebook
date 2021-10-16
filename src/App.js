import { useEffect, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Appbar from './components/Appbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HomePage from './Pages/HomePage';
import LogInPage from './Pages/LogInPage';
import ContactsPage from './Pages/ContactsPage';
import RegistrationPage from './Pages/RegistrationPage';
import { getCurrentUser } from './redux/auth/authOperations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Appbar />
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Switch>
          <PublicRoute path="/" exact component={HomePage} />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsPage}
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
            path="/register"
            exact
            component={RegistrationPage}
          />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
