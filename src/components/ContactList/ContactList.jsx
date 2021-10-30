import PropTypes from 'prop-types';
import './ContactList.scss';

function ContactList({ contacts, onRemove }) {
    return (
        <ul className="list">
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p className="title">Name: { contact.name }</p>
                    <p className="title">Number: {contact.number}</p>
                    <button className="button" onClick={()=> onRemove(contact.id)} type="button">Delete</button>
                </li>   
            ))}
        </ul>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })),
    onRemove: PropTypes.func.isRequired,
};

export default ContactList;