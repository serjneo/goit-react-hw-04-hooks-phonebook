import { useState } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.scss';

function ContactForm({handleSubmitForm}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitForm(name, number);
        setName('');
        setNumber('');
    }

        return (
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <p className="title">Name:</p>
                    <input
                        className="input"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p className="title">Number:</p>
                    <input
                        className="input"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        value={number}
                        onChange={handleChange}
                    />
                </label>
                <button className="button" type="submit">Add contact</button>
            </form>
        );
}

ContactForm.propTypes = {
    handleSubmitForm: PropTypes.func.isRequired,
};

export default ContactForm;