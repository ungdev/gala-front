import React from 'react';

import axios from '../../utils/axios';

import InputField from '../../components/inputField';
import Textarea from '../../components/textarea';
import SubmitButton from '../../components/submitButton';
import Notification from '../../components/notification';

import './contact.css';

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonStatus: null,
			notificationStatus: null,
			notificationText: '',
			errorFields: {
				name: '',
				email: '',
				message: ''
			},
			name: '',
			email: '',
			message: ''
		};
	}

	checkFields = () => {
		let errors = {
			name: '',
			email: '',
			message: ''
		};

		if(this.state.name === '') {
			errors.name = 'Veuillez saisir votre nom';
		}

		if(this.state.email === '') {
			errors.email = 'Veuillez saisir votre adresse mail';
		}
		else if(!this.state.email.match(emailRegexp)) {
			errors.email = 'Veuillez saisir une adresse mail valide';
		}

		if(this.state.message === '') {
			errors.message = 'Veuillez saisir votre message';
		}

		if(!errors.name && !errors.email && !errors.message) {
			return true;
		}
		else {
			this.setState({
				errorFields: errors
			});

			return false;
		}
	}

	submit = async () => {
		if(!this.checkFields()) {
			return;
		}

		this.setState({
			buttonStatus: 'loading'
		});

		try {
			await axios.post('contact', {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message
			});

			this.setState({
				notificationStatus: 'success',
				notificationText: 'Le message a bien été envoyé'
			});

			this.clearFields();
		} catch(err) {
			this.setState({
				notificationStatus: 'error',
				notificationText: 'Erreur lors de l\'envoi du message'
			});
		}

		this.setState({
			buttonStatus: null
		});
	}

	clearFields = () => {
		this.setState({
			errorFields: {
				name: '',
				email: '',
				message: ''
			},
			name: '',
			email: '',
			message: ''
		});
	}

  render() {
    return (
			<div className="page-container" id="contact">
				<h1 className="centered">Contact</h1>
				<hr />

				<Notification
					status={this.state.notificationStatus}
				>
					{this.state.notificationText}
				</Notification>

				<InputField
					placeholder="Nom"
					className="contact-name-field"
					onChange={(name) => this.setState({ name, errorFields: { ...this.state.errorFields, name: '' } })}
					value={this.state.name}
					error={this.state.errorFields.name}
				/>

				<InputField
					placeholder="Email"
					onChange={(email) => this.setState({ email, errorFields: { ...this.state.errorFields, email: '' } })}
					value={this.state.email}
					error={this.state.errorFields.email}
				/>

				<Textarea
					placeholder="Message"
					className="contact-textarea"
					onChange={(message) => this.setState({ message, errorFields: { ...this.state.errorFields, message: '' } })}
					value={this.state.message}
					error={this.state.errorFields.message}
				/>

				<SubmitButton
					className="contact-submit-button"
					onClick={this.submit}
					status={this.state.buttonStatus}
				/>
			</div>
		);
  }
};

export default Contact;