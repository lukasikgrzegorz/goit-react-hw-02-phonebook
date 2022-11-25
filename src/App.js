import React, { Component } from "react";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";

class App extends Component {
	state = {
		contacts: [],
		name: "",
	};

	addContact = (newContact) => {
		const { contacts } = this.state;
		contacts.push(newContact);
		this.setState({ contacts: contacts });
	};

	render() {
		return (
			<>
				<ContactForm onSubmit={(values) => this.addContact(values)}></ContactForm>
				<ContactList contacts={this.state.contacts}></ContactList>
			</>
		);
	}
}

export default App;
