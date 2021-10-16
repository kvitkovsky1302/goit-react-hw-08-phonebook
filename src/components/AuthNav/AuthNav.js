import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <>
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
  </>
);

export default AuthNav;
