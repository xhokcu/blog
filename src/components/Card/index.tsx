import React from 'react';
import dot from './dot.png';
export interface ICardProps {
  date: string;
  title: string;
  company: string;
}

function Card({ date, title, company }: ICardProps) {
  return (
    <div className="flex flex-row rounded-lg justify-between py-4">
      <div className=" flex-col gap-4">
        <h2 className=" font-sans text-md font-semibold text-gray-400">
          {title}
        </h2>
        <h2 className="font-sans text-sm text-gray-400">{company}</h2>
      </div>
      <div className="text-sm">
        <h2 className=" font-sans italic text-gray-200 text-right">{date}</h2>
      </div>
    </div>
  );
}
// grid grid-cols-6
export default Card;
