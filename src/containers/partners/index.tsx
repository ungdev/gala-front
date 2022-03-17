import React, { useEffect, useState } from 'react';
import Heading from '../../components/heading';
import { fetchPartners, Partner } from '../../utils/api';

import './partners.scss';

function Partners() {
  const [partners, setPartners] = useState<Partner[] | null>(null);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const apiPartners = await fetchPartners();

    setPartners(apiPartners.data);
  };

  return (
    <>
      <Heading title="Partenaires" />

      <div className="page-container" id="partners">
        {partners && partners.length ? (
          <div className="partners-list">
            {partners.map((partner, i) => (
              <a href={partner.url} className="partner" key={i}>
                <div className="image">
                  <img src={`${import.meta.env.VITE_API_URL}${partner.image}`} alt={partner.name} />
                </div>
                <div className="name">{partner.name}</div>
                <div className="description">{partner.description}</div>
              </a>
            ))}
          </div>
        ) : partners === null ? (
          <div className="partners-loader">
            <i className="fas fa-spinner fa-spin" />
          </div>
        ) : (
          <div className="no-partners">Les partenaires seront bientôt disponibles</div>
        )}
      </div>
    </>
  );
}

export default Partners;
