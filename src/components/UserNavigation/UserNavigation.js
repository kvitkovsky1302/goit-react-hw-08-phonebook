import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import styles from './UserNavigation.module.css';

const UserNavigation = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div className={styles.userMenuWrapper}>
      <p className={styles.text}>Welcome {userName}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
};

export default UserNavigation;
