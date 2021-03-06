import React from 'react';
import styles from './Partners.css';

const partners = [{
  name: 'Airbnb',
  logo: require('../../../static/images/Airbnb.png'),
},
{
  name: 'Metro',
  logo: require('../../../static/images/Metro.png'),
},
{
  name: 'Pariti',
  logo: require('../../../static/images/Pariti.png'),
},
{
  name: 'Unshackled',
  logo: require('../../../static/images/Unshackled.png'),
},
];

const partnerLogos = partners.map(partner =>
  <div key={partner.name}><img className="Nopa" alt={partner.name} src={partner.logo} /></div>,
);

const Partners = props => (
  <section className={styles.partners}>
    <div>
      <span>Our partners:</span>
    </div>
    <div>
      {partnerLogos}
    </div>
  </section>
  );

export default Partners;
