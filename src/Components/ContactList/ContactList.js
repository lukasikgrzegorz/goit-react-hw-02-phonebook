import React, { Component } from "react";
import Contact from "./Contact/Contact";

class ContactList extends Component {
	render() {
		const { contacts, filter, onClickHandler } = this.props;

		return (
			<ul>
				{contacts
					.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
					.map((contact) => {
						return (
							<Contact key={contact.id}>
								{contact.name} : {contact.number}{" "}
								<button id={contact.id} onClick={onClickHandler}>
									Delete
								</button>
							</Contact>
						);
					})}
			</ul>
		);
	}
}

export default ContactList;
