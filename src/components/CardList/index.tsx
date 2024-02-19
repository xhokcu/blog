import React from 'react';
import Card from '../Card';

function CardList() {
  return (
    <div className="flex flex-col ">
      <Card
        date="November 2022-Present"
        title="Software Developer"
        company="NTT Data Business Solutions Turkey"
      />
      <Card
        date="June-September 2022"
        title="HTML Email Development Specialist"
        company="Ministry of CRM"
      />
    </div>
  );
}

export default CardList;
