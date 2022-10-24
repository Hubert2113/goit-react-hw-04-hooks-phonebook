import { useState } from 'react';
import styles from './App.module.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts([...contacts, {
        name: name,
        number: number,
        id: `id-${contacts.length++}`,
      }]);
    }
  };

  const handleInputName = (ev) => {
    setName(ev.target.value);
  };

  const handleInputNumber = (ev) => {
    setNumber(ev.target.value)
  };

  const handleInputFilter = (ev) => {
    setFilter(ev.target.value)
  };

  const deleteContact = (ev) => {
    const newContacts = contacts.filter((contact) => contact.id !== ev.target.parentNode.id);
    this.setState({ contacts: newContacts });
  }

  return (
    <div className={styles.container}>
      <h2>Phonebook</h2>
      <Form
        handleSubmit={handleSubmit}
        name={name}
        handleInputName={handleInputName}
        handleInputNumber={handleInputNumber}
        number={number}
      />
      <h2>Contacts</h2>
      <Filter handleInput={handleInputFilter} filter={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
}
