import React from 'react';

import InputField from '../../components/inputField';
import Textarea from '../../components/textarea';
import SubmitButton from '../../components/submitButton';

import './contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonStatus: null,
			firstname: '',
			lastname: '',
			message: ''
		};
	}

	submit = () => {
		// the following code is for demo purpose
		console.log({
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			message: this.state.message
		});

		this.setState({
			buttonStatus: 'loading'
		});

		setTimeout(() => {
			this.setState({
				buttonStatus: 'success'
			});

			setTimeout(() => {
				this.setState({
					buttonStatus: 'error'
				});

				setTimeout(() => {
					this.setState({
						buttonStatus: null
					});
				}, 2000);
			}, 2000);
		}, 2000);
	}

  render() {
    return (
			<div id="contact">
				<h1 className="centered">Contact</h1>
				<hr />

				<InputField
					placeholder="Prénom"
					className="contact-firstname-field"
					onChange={(firstname) => this.setState({ firstname })}
				/>
				<InputField
					placeholder="Nom"
					onChange={(lastname) => this.setState({ lastname })}
				/>
				<Textarea
					placeholder="Message"
					className="contact-textarea"
					onChange={(message) => this.setState({ message })}
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