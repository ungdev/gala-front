import React from 'react';

import InputField from '../../components/inputField';
import Textarea from '../../components/textarea';
import SubmitButton from '../../components/submitButton';

import './contact.css';

class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buttonStatus: null
		};
	}

	submit = () => {
		// the following code is for demo purpose
		console.log('submit');

		this.setState({
			buttonStatus: 'loading'
		});

		setTimeout(() => {
			this.setState({
				buttonStatus: 'success'
			});

			setTimeout(() => {
				this.setState({
					buttonStatus: null
				});
			}, 2000);
		}, 2000);
	}

  render() {
    return (
			<div id="contact">
				<h1>Contact</h1>
				<hr />

				<InputField
					placeholder="Nom"
					className="contact-name-field"
				/>
				<InputField
					placeholder="Prénom"
				/>
				<Textarea
					placeholder="Message"
					className="contact-textarea"
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