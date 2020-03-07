import React from 'react';

class Notifications extends React.Component {
	componentDidMount() {
		var OneSignal = window.OneSignal || [];

		OneSignal.push([
			'init',
			{
				appId: '06b95aa2-adc5-4e43-816b-a957b05435a5',
				autoRegister: true /* Set to true for HTTP Slide Prompt */,
				httpPermissionRequest: {
					enable: true,
				},
				notifyButton: {
					enable: false,
				},
				welcomeNotification: {
					title: 'Les notifications sont maintenant activées !',
					message: 'Vous recevrez maintenant les actualités du Gala UTT',
				},
				promptOptions: {
					/* actionMessage limited to 90 characters */
					actionMessage: "Nous utilisons les notifications pour vous informer avant et pendant l'événement",
					/* acceptButtonText limited to 15 characters */
					acceptButtonText: 'Autoriser',
					/* cancelButtonText limited to 15 characters */
					cancelButtonText: 'Refuser',
				},
			},
		]);
	}

	render() {
		return null;
	}
}

export default Notifications;
