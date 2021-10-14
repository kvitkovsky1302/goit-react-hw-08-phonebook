import AuthNavigation from '../AuthNavigation';
import s from './Appbar.module.css';
import { useSelector } from 'react-redux';
import { isAuthorized } from '../../redux/auth/authSelectors';
import UserNavigation from '../UserNavigation';

function Appbar() {
  const isAuthenticate = useSelector(isAuthorized);
  return (
    <header className={s.header}>
      <AuthNavigation />
      {isAuthenticate && <UserNavigation />}
    </header>
  );
}

export default Appbar;
