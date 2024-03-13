import React from 'react';
import Card from '../Card';

function CardList() {
  return (
    <div className="flex flex-col ">
      <Card
        date="1.5 yr"
        title="Software Developer"
        company="NTT Data Business Solutions Turkey"
      />
      <Card
        date="4 mos"
        title="Email Development Specialist"
        company="Ministry of CRM"
      />
    </div>
  );
}

export default CardList;
