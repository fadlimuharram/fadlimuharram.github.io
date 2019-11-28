import React from 'react';
import Card from '../Card';
import img from '../../../../img/Fadli-Muharram-Arkademy.png';

const Arkademy = () => (
  <Card
    title="Arkademy software engineering Bootcamp"
    img={{
      alt: 'Arkademy software engineering Bootcamp',
      src: img
    }}
    completed="selesaikan pada November 2019"
    linkCertificate="https://www.arkademy.com/"
  />
);

export default Arkademy;
