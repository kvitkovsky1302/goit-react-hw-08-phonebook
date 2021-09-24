import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import styles from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onInputChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
}

export default Filter;
