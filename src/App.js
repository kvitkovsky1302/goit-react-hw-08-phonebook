import { useEffect, Suspense, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Appbar from './components/Appbar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getCurrentUser } from './redux/auth/authOperations';

const HomePage = lazy(() => import('./Pages/HomePage'));
const RegistrationPage = lazy(() => import('./Pages/RegistrationPage'));
const LogInPage = lazy(() => import('./Pages/LogInPage'));
const ContactsPage = lazy(() => import('./Pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <ReactNotification />
      <Appbar />
      <Suspense fallback={<h1>Loading...</h1>}>
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
