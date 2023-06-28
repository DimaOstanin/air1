import React from 'react';
import GoodsInteface from "../interface/GoodsInterface";



interface GoodsItemProps {
  good: GoodsInteface;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
  return (
    <div>
      <h3>{good.name}</h3>
      <p>Price: {good.price}</p>
      <p>Company: {good.company}</p>
      <p>Condition: {good.condition}</p>
      <p>City: {good.city}</p>
      <img src={good.image} alt={good.name} />
    </div>
  );
};

export default GoodsItem;
