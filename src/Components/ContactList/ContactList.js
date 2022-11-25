import React, { Component } from "react";
import Contact from "./Contact/Contact";

class ContactList extends Component {
	render() {
		const { contacts, filter } = this.props;

		return (
			<ul>
				{contacts
					.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
					.map((contact) => {
						return (
							<Contact key={contact.id}>
								{contact.name} : {contact.number}
							</Contact>
						);
					})}
			</ul>
		);
	}
}

export default ContactList;
