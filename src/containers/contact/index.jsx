import React from 'react';

import InputField from '../../components/inputField';
import Textarea from '../../components/textarea';
import SubmitButton from '../../components/submitButton';

import './contact.css';

class Contact extends React.Component {
  render() {
    return (
			<div id="contact">
				<h1>Contact</h1>
				<hr />

				<InputField placeholder="Nom" style={{ marginRight: '20px' }} />
				<InputField placeholder="Prénom" />

				<Textarea placeholder="Message" />

				<br /><br />

				<SubmitButton />
			</div>
		);
  }
};

export default Contact;