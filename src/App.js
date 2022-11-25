import React, { Component } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";

class App extends Component {
	state = {
		contacts: [
			{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
			{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
			{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
			{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
		],
		filter: "",
	};

	addContact = (newContact) => {
		const { contacts } = this.state;
		contacts.push(newContact);
		this.setState({ contacts: contacts });
	};

	changeFilterHandler = (e) => {
		this.setState({ filter: e.target.value });
	};

	render() {
		return (
			<div>
				<h1>Phonebook</h1>
				<ContactForm onSubmit={(values) => this.addContact(values)}></ContactForm>

				<h2>Contacts</h2>
				<Filter changeHandler={this.changeFilterHandler}></Filter>
				<ContactList filter={this.state.filter} contacts={this.state.contacts}></ContactList>
			</div>
		);
	}
}

export default App;
