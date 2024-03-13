import React from 'react';
export interface ICardProps {
  date: string;
  title: string;
  company: string;
}

function Card({ date, title, company }: ICardProps) {
  return (
    <div className="border-bottom border-b-2 border-b-gray-800 flex flex-row justify-between py-4">
      <div className=" flex-col gap-4">
        <h2 className=" font-sans text-md sm:text-lg font-semibold text-gray-400">
          {title}
        </h2>
        <h2 className="font-sans text-sm sm:text-md text-gray-400">
          {company}
        </h2>
      </div>
      <h2 className=" font-sans text-sm sm:text-md  text-gray-400 text-right">
        {date}
      </h2>
    </div>
  );
}
// grid grid-cols-6
export default Card;
