import React, { Component } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
	name: "",
	number: "",
};

class ContactForm extends Component {
	state = { ...INITIAL_STATE };

	handleSubmit = (e) => {
		e.preventDefault();

		const form = e.currentTarget;
		const name = form.elements.name.value;
		const number = form.elements.number.value;
		const id = nanoid();

		console.log({ id, name, number });

		this.props.onSubmit({ id, name, number });

		form.reset();
	};

	render() {
		return (
			<>
				<h2>Phonebook</h2>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
					/>
					<label htmlFor="number">Number</label>
					<input
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
					/>
					<button type="submit">Add contact</button>
				</form>
			</>
		);
	}
}

export default ContactForm;
