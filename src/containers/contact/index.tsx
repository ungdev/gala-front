import React, { useState } from 'react';

import axios from '../../utils/axios';

import InputField from '../../components/inputField';
import Textarea from '../../components/textarea';
import SubmitButton, { SubmitButtonState } from '../../components/submitButton';
import Notification from '../../components/notification';

import './contact.scss';

const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Contact = () => {
  const [buttonStatus, setButtonStatus] = useState<'loading' | null>(null);
  const [notificationStatus, setNotificationStatus] = useState<'success' | 'error' | '' | null>(null);
  const [notificationText, setNotificationText] = useState('');
  const [errorFields, setErrorFields] = useState({ name: '', email: '', message: '' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const checkFields = () => {
    const errors = {
      name: '',
      email: '',
      message: '',
    };

    if (name === '') {
      errors.name = 'Veuillez saisir votre nom';
    }

    if (email === '') {
      errors.email = 'Veuillez saisir votre adresse mail';
    } else if (!email.match(emailRegexp)) {
      errors.email = 'Veuillez saisir une adresse mail valide';
    }

    if (message === '') {
      errors.message = 'Veuillez saisir votre message';
    }

    if (!errors.name && !errors.email && !errors.message) {
      return true;
    }

    setErrorFields(errors);
    return false;
  };

  const submit = async () => {
    if (!checkFields()) {
      return;
    }

    setButtonStatus('loading');

    try {
      await axios.post('contact', {
        name,
        email,
        message,
      });

      setNotificationStatus('success');
      setNotificationText('Le message a bien été envoyé');

      clearFields();
    } catch (err) {
      setNotificationStatus('error');
      setNotificationText("Erreur lors de l'envoi du message");
    }

    setButtonStatus(null);
  };

  const clearFields = () => {
    setErrorFields({
      name: '',
      email: '',
      message: '',
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="page-container" id="contact">
      <div className="content">
        <h1>Contact</h1>
        <hr />

        <Notification status={notificationStatus}>{notificationText}</Notification>
        <div id="input_fields">
          <InputField
            placeholder="Nom"
            className="contact-name-field"
            onChange={(name) => setName(name)}
            value={name}
            error={errorFields.name}
          />

          <InputField
            placeholder="Email"
            className="contact-name-field"
            onChange={(email) => setEmail(email)}
            value={email}
            error={errorFields.email}
          />
        </div>

        <Textarea
          placeholder="Message"
          className="contact-textarea"
          onChange={(message) => setMessage(message)}
          value={message}
          error={errorFields.message}
        />

        <SubmitButton className="contact-submit-button" onClick={submit} status={buttonStatus} />
      </div>
    </div>
  );
};

export default Contact;
