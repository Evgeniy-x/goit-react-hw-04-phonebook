import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contact_block}>
      <ul className={css.contact_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contact_item}>
            {name}: <span>{number}</span>
            <button
              onClick={() => onDeleteContact(id)}
              className={css.contact_button}
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
