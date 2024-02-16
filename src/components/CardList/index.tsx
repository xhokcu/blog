import React from 'react';
import Card from '../Card';

function CardList() {
  return (
    <div className="flex flex-col ">
      <div className="flex h-0.5 bg-gray-800" />

      <Card
        date="November 2022-Present"
        title="Software Developer"
        company="NTT Data Business Solutions Turkey"
      />
      <div className="flex h-0.5 bg-gray-800" />
      <Card
        date="June-September 2022"
        title="HTML Email Development Specialist"
        company="Ministry of CRM"
      />
      <div className="flex h-0.5 bg-gray-800" />
    </div>
  );
}

export default CardList;
