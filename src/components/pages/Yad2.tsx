import React, { useState } from 'react';
import {GoodsType} from "../../model/GoodsType";
import {GoodsForm}from '../forms/GoodsForm';
import GoodsList from '../list/GoodsList';
import {RandomGoodsCreator} from '../../utils/RandomGoodsCreator';
import { useDispatch, useSelector } from 'react-redux';
import { goodsActions } from '../../redux/goodsSlice';

export const Yad2: React.FC = () => {
  
  const [goods, setGoods] = useState<GoodsType[]>([]);
  const dispatch = useDispatch<any>();

  
  const addGood = (good: GoodsType) => {
    const newGood: GoodsType = {
       id:  Date.now(),
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
      <GoodsForm onAdd={(goods) => {dispatch(goodsActions.addGoods(goods))}} />
      <RandomGoodsCreator onGenerate={generateRandomGoods} />
      <GoodsList goods={goods} />
    </div>
  );
}

