import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: <span>{number}</span>
            <button
              onClick={() => onDeleteContact(id)}
              className={css.delete}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
