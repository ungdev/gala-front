import React from 'react';

import axios from '../../utils/axios';

import './partners.css';

interface RawPartner {
  url: string;
  image: string;
  name: string;
}

interface PartnersState {
  partners: JSX.Element[] | null;
}

class Partners extends React.Component<{}, PartnersState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      partners: null,
    };
  }

  componentDidMount() {
    this.fetchPartners();
  }

  fetchPartners = async () => {
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

    this.setState({
      partners,
    });
  };

  render() {
    return (
      <div className="page-container" id="partners">
        <h1>Partenaires</h1>
        <hr />

        {this.state.partners && this.state.partners.length ? (
          <div className="partners-list">{this.state.partners}</div>
        ) : this.state.partners === null ? (
          <div className="partners-loader">
            <i className="fas fa-spinner fa-spin" />
          </div>
        ) : (
          <div className="no-partners">(Les partenaires seront bientôt disponibles)</div>
        )}
      </div>
    );
  }
}

export default Partners;
