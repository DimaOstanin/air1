import React, { useState } from 'react';

import {GoodsType} from "../../model/GoodsType";
import GoodsForm from '../forms/GoodsForm';
import GoodsList from '../list/GoodsList';
import RandomGoodsCreator from '../../utils/RandomGoodsCreator';

export const Yad2: React.FC = () => {

  const [goods, setGoods] = useState<GoodsType[]>([]);

  const addGood = (good: GoodsType) => {
    const newGood: GoodsType = {
       id: Date.now(),
      ...good,
    };

    setGoods(prevGoods => [...prevGoods, newGood]);
  };

  const generateRandomGoods = (randomGoods: GoodsType[]) => {
    setGoods(prevGoods => [...prevGoods, ...randomGoods]);
  };
  return (
    <div>
      <h1>Second-Hand Goods</h1>
      <GoodsForm onAdd={addGood} />
      <RandomGoodsCreator onGenerate={generateRandomGoods} />
      <GoodsList goods={goods} />
    </div>
  );
}

