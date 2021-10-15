import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav';
import styles from './Appbar.module.css';
import { useSelector } from 'react-redux';
import { isAuthorized } from '../../redux/auth/authSelectors';
import UserMenu from '../UserMenu';

function Appbar() {
  const isAuthenticate = useSelector(isAuthorized);
  return (
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
  );
}

export default Appbar;
