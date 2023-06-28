import React from 'react';
import GoodsItem from '../items/GoodsItem';
import GoodsInteface from "../interface/GoodsInterface";


interface GoodsListProps {
  goods: GoodsInteface[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
    <div>
      <h2>Goods List</h2>
      {goods.length === 0 ? (
        <p>No goods available.</p>
      ) : (
        <ul>
          {goods.map(good => (
            <li key={good.id}> 
              <GoodsItem good={good} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoodsList;
