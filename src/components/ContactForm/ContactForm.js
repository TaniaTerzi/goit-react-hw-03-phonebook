import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import css from './contactForm.module.css'

class ContactForm extends Component {
    loginInputId = nanoid();
    state = {
    // contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
    // contacts: [],
    name: '',
    number: '',
    });
  };
  nameChange = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };
  numberChange = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };
  render() {
    return (
      <form className={css.formContact} onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          Name
          <input
          className={css.inputName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.nameChange}
            value={this.state.name}
          />
        </label>
        <label htmlFor={this.loginInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.numberChange}
            value={this.state.number}
          />
        </label>
        <button className={css.buttom}type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};