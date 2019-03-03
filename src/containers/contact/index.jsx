import React from 'react';

import axios from '../../utils/axios';

import InputField from '../../components/inputField';
import Textarea from '../../components/textarea';
import SubmitButton from '../../components/submitButton';
import Notification from '../../components/notification';

//import emailImg from '../../assets/email.png';

import './contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonStatus: null,
			notificationStatus: null,
			notificationText: '',
			name: '',
			email: '',
			message: ''
		};
	}

	submit = async () => {
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
			name: '',
			email: '',
			message: ''
		});
	}

  render() {
    return (
			<div id="contact">
				<h1 className="centered">Contact</h1>
				<hr />

				{/*
				<p>Le formulaire de contact n'est actuellement pas disponible, mais vous pouvez nous contacter à l'adresse suivante :</p>
				<img src={emailImg} alt="" style={{ margin: '0 auto', display: 'block' }} />
				*/}

				<Notification
					status={this.state.notificationStatus}
				>
					{this.state.notificationText}
				</Notification>

				<InputField
					placeholder="Nom"
					className="contact-name-field"
					onChange={(name) => this.setState({ name })}
					value={this.state.name}
				/>
				<InputField
					placeholder="Email"
					onChange={(email) => this.setState({ email })}
					value={this.state.email}
				/>
				<Textarea
					placeholder="Message"
					className="contact-textarea"
					onChange={(message) => this.setState({ message })}
					value={this.state.message}
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