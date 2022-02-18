import React, { ReactNode, useEffect, useState } from 'react';

import axios from '../../utils/axios';

import './partners.scss';

const Partners = () => {
  const [partners, setPartners] = useState<ReactNode[] | null>(null);

  useEffect(() => {
    fetchPartners();
  });

  const fetchPartners = async () => {
    const apiPartners = await axios.get<RawPartner[]>('partners');

    const partners = apiPartners.data.map((partner, i) => (
      <a href={partner.url} className="partner-link" key={i}>
        <div className="partner" data-name={partner.name}>
          <div className="partner-image">
            <img src={`${import.meta.env.VITE_API_URL}${partner.image}`} alt={partner.name} />
          </div>
        </div>
      </a>
    ));

    setPartners(partners);
  };

  return (
    <div className="page-container" id="partners">
      <h1>Partenaires</h1>
      <hr />

      {partners && partners.length ? (
        <div className="partners-list">{partners}</div>
      ) : partners === null ? (
        <div className="partners-loader">
          <i className="fas fa-spinner fa-spin" />
        </div>
      ) : (
        <div className="no-partners">(Les partenaires seront bientôt disponibles)</div>
      )}
    </div>
  );
};

interface RawPartner {
  url: string;
  image: string;
  name: string;
}

export default Partners;
