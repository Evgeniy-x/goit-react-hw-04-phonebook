import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      {' '}
      <p>Find contact by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
