import PropTypes from 'prop-types';
import css from './contactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li className="List_item" key={contact.id}>
          <span>
            {contact.name}: <span className="List_span">{contact.number}</span>
          </span>
          <button className={css.button}            onClick={() => deleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};