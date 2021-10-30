import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import contactFilter from './utils/filter';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [state, setState] = useState({
    contacts: initialState,
    filter: '',
  });

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setState(prevState => ({ ...prevState, contacts: contacts }));
    }
  }, []);

  const addContact = contact => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    const newContact = { id: shortid.generate(), ...contact };
    if (contacts) {
      localStorage.setItem(
        'contacts',
        JSON.stringify([...contacts, newContact]),
      );
    } else {
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state.contacts, newContact]),
      );
    }
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
    }));
  };

  const handleSubmitForm = contact => {
    state.contacts.some(({ name }) => name === contact.name)
      ? alert('Contact alredy exists')
      : addContact(contact);
  };

  const removeContact = id => {
    const newContacts = state.contacts.filter(contact => contact.id !== id);
    setState(prevState => ({
      ...prevState,
      contacts: newContacts,
    }));
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const handleChangeFilter = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="App">
      <ContactForm onSubmit={handleSubmitForm} />
      <Filter value={state.filter} onChange={handleChangeFilter} />
      <ContactList
        onRemove={removeContact}
        contacts={contactFilter(state.contacts, state.filter)}
      />
    </div>
  );
}

export default App;
