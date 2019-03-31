import React from 'react';

import './commitments.css';

class Commitments extends React.Component {
	render() {
		return (
			<div className="page-container" id="commitments">
				<h1 className="centered">Nos engagements</h1>
				<hr />

				<h2 className="title-decoration">Prévention</h2>
				<p>
					La prévention lors de la soirée est notre priorité. Nous proposons des boissons sans alcool gratuites pour tous.
					Nous formons également nos barmans à la bonne tenue de nos différents bars.
					De plus, comme chaque année, nous mettons en place des navettes gratuites entre le centre-ville et le Gala.
 				</p>

				<h2 className="title-decoration">Écologie</h2>
				<p>
					Le Gala a pour objectif de réduire ses déchets au maximum.
					Ainsi, lors de la soirée aucun verre jetable ne sera distribué et tous les verres seront réutilisables et consignés.
				</p>

				<h2 className="title-decoration">Local</h2>
				<p>
					Afin de promouvoir les produits régionaux, le Gala s'associe majoritairement avec des fournisseurs locaux.
				</p>

				<h2 className="title-decoration">Social</h2>
				<p>
					Afin de rendre le Gala plus accessible, des places sont offertes aux bénéficiaires de l’Agoraé et des tarifs préférentiels sont mis en place pour les étudiants.
				</p>
			</div>
		);
	}
}

export default Commitments;