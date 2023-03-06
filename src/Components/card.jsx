import React from 'react';
import { Sandwich } from '../assets/images';


const foodCard=[{
    id: 0, title: "Cusine", imgSrc: Sandwich
},
{
    id: 1, title: "Cusine", imgSrc: Sandwich
},

{
    id: 2, title: "Cusine", imgSrc: Sandwich
},

];

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <div className="grid grid-cols-3 gap-x-4">
      {foodCard.map(({ id, title, imgSrc }) => (
        <div
          className="border h-[240px] rounded w-30 flex cursor-pointer text-sm gap-y-2"
          key={id}
        >
          <img src={imgSrc} alt={title} />
          {title}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;