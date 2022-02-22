import React, { ReactNode, useEffect, useState } from 'react';
import Heading from '../../components/heading';

import axios from '../../utils/axios';

import './partners.scss';

interface RawPartner {
  url: string;
  image: string;
  name: string;
}

function Partners() {
  const [partners, setPartners] = useState<ReactNode[] | null>(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    const apiPartners = await axios.get<RawPartner[]>('partners');

    const fetchedPartners = apiPartners.data.map((partner, i) => (
      <a href={partner.url} className="partner-link" key={i}>
        <div className="partner" data-name={partner.name}>
          <div className="partner-image">
            <img src={`${import.meta.env.VITE_API_URL}${partner.image}`} alt={partner.name} />
          </div>
        </div>
      </a>
    ));

    setPartners(fetchedPartners);
  };

  return (
    <>
      <Heading title="Partenaires" />

      <div className="page-container" id="partners">
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
    </>
  );
}

export default Partners;
