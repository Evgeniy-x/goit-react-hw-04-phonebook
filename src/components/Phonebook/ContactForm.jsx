import { useState } from 'react';
import css from './Phonebook.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // handleChangeName = e => {
  //   this.setState({ name: e.currentTarget.value });
  // };

  // handleChangeNumber = e => {
  //   this.setState({ number: e.currentTarget.value });
  // };

  function handeleSubmit(e) {
    e.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
  }

  return (
    <form className={css.form} onSubmit={handeleSubmit}>
      <label>
        Name <br />
        <input
          onChange={e => setName(e.currentTarget.value)}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        {' '}
        Number <br />
        <input
          onChange={e => setNumber(e.currentTarget.value)}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
