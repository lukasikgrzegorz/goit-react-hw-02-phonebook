import React, { Component } from "react";

class ContactList extends Component {
	render() {
		const { contacts } = this.props;

		return (
			<ul>
				{contacts.map((contact) => {
					return (
						<li key={contact.id}>
							{contact.name}: {contact.number}
						</li>
					);
				})}
			</ul>
		);
	}
}

export default ContactList;
