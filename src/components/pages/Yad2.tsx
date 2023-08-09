import React, { useEffect, useState } from 'react';
import {GoodsType} from "../../model/GoodsType";
import {GoodsForm}from '../forms/GoodsForm';
import {GoodsList} from '../list/GoodsList';
import {RandomGoodsCreator} from '../../utils/RandomGoodsCreator';
import { useDispatch, useSelector } from 'react-redux';


export const Yad2: React.FC = () => {

  
  const [goods, setsGoods] = useState<GoodsType[]>([]);
  const goodsAll = useSelector<any, GoodsType[]>(state => state.goodsBox.goods);
  
  

  useEffect(() => {
    
    setsGoods(goodsAll);
    console.log(goods)
  },);
  
  return (
    <GoodsList goods={goods}></GoodsList>
  );
}

