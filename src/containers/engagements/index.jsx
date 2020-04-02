import React from 'react';

import './engagements.css';

class Engagements extends React.Component {
    render() {
        return (
            <div className="page-container" id="access">
                <h1 className="centered">Engagements</h1>
                <hr />

                <h2 className="title-decoration">Environnement</h2>
                <p>
                    L'aspect environnemental prend une part grandissante dans la société d'aujourd'hui, et dans notre événement aussi.
                    Une part de plus en plus importante de notre budget est ainsi allouée à cette composante.
                    Que cela soit avant, pendant ou après, nous mettons en place toujours plus de dispositifs de réduction, de tri et de valorisations des déchets.
                    </p>

                <h2 className="title-decoration">Prévention</h2>
                <p>
                    La sécurité de chacun est notre priorité. 
                    Que cela soit pour venir, durant notre événement ou pour repartir, chaque participant ne doit pas se retrouver à mettre son intégrité physique en péril, volontairement ou non, pouvoir bénéficier de solutions adaptées allant en ce sens.
                </p>
                <p>
                    Plusieurs dispositifs sont ainsi mis en place gratuitement :
                    <ul>
                        <li>Navette entre l'UTT et le centre-ville de Troyes</li>
                        <li>Ethylotests jetables (dont éthylotests pour jeunes conducteurs</li>
                        <li>Ethylotests électroniques</li>
                        <li>Bouchons d'oreille</li>
                        <li>Préservatifs</li>
                        <li>Couvercles de gobelet</li>
                        <li>Stand de prévention et de sensibilisation</li>
                        <li>Personnes de confiance</li>
                        <li>Affichage</li>
                    </ul>
                </p>

                <h2 className="title-decoration">Soutien d'une association</h2>
                <p>L'association Gala UTT s'engage chaque année auprès d'une association reconnue d'utilité publique, afin notamment de lui apporter une plus grande visibilité auprès du publique que l'événement peut toucher.
                    <br />
                    Cet engagement peut prendre diverses formes : don financier, publicité ...
                    <br />
                    Associations déjà soutenues :
                    <ul>
                        <li>Les Restos du Coeur</li>
                        <li>Amnesty International</li>
                        <li>UNICEF</li>
                    </ul>
                </p>

            </div>
        );
    }
}

export default Engagements;