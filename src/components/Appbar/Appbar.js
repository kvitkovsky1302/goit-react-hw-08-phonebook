import { NavLink } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import AuthNav from '../AuthNav';
import styles from './Appbar.module.css';
import { useSelector } from 'react-redux';
import { isAuthorized } from '../../redux/auth/authSelectors';
import UserMenu from '../UserMenu';

function Appbar() {
  const isAuthenticate = useSelector(isAuthorized);
  return (
    <>
      <ReactNotification />
      <header className={styles.header}>
        <NavLink
          to="/"
          exact
          className={styles.navLink}
          activeClassName={styles.navActiveLink}
        >
          Home
        </NavLink>

        {isAuthenticate && (
          <NavLink
            to="/contacts"
            className={styles.navLink}
            activeClassName={styles.navActiveLink}
          >
            Contacts
          </NavLink>
        )}

        {isAuthenticate ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}

export default Appbar;
