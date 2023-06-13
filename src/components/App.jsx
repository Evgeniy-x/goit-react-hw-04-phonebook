import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './Phonebook/ContactForm.jsx';
import ContactList from './Phonebook/ContactList.jsx';
import Filtre from './Phonebook/Filter.jsx';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  // [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]

  function addContact(name, number) {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.filter(elem => elem.name === name).length) {
      alert('Вже є');
      return;
    }

    setContacts([contact, ...contacts]);
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  }

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}> </ContactForm>
      <h2>Contacts</h2>
      <Filtre
        value={filter}
        onChange={e => setFilter(e.currentTarget.value)}
      ></Filtre>

      <ContactList
        contacts={visibleContacts}
        onDeleteContact={deleteContact}
      ></ContactList>
    </>
  );
}
