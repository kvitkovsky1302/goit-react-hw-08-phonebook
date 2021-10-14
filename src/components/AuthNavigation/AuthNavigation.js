import { NavLink } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

const AuthNavigation = () => (
  <>
    <NavLink
      to="/"
      exact
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/register"
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Login
    </NavLink>
    <NavLink
      to="/contacts"
      className={styles.navLink}
      activeClassName={styles.navActiveLink}
    >
      Contacts
    </NavLink>
  </>
);

export default AuthNavigation;
