import React, { useEffect, useState } from 'react';
import {GoodsType} from "../../model/GoodsType";
import {GoodsForm}from '../forms/GoodsForm';
import GoodsList from '../list/GoodsList';
import {RandomGoodsCreator} from '../../utils/RandomGoodsCreator';
import { useDispatch, useSelector } from 'react-redux';
import { goodsActions } from '../../redux/goodsSlice';
import {db} from '../../config/firebase-config'
import { collection ,getDocs ,doc} from 'firebase/firestore';

import { Box, Grid, List, ListItem,  Typography } from '@mui/material';

import {GoodsItem} from '../items/GoodsItem';

import { Link } from 'react-router-dom';


export const Yad2: React.FC = () => {
  const authUser:string = useSelector<any,string>(state=>state.auth.authenticated );

  
  const [goods, setsGoods] = useState<GoodsType[]>([]);
  const dispatch = useDispatch<any>();
  const goodsAll = useSelector<any, GoodsType[]>(state => state.goodsBox.goods);
  
  function rearrangeArrayByIndex(myArray:GoodsType[]):GoodsType[] {
    function findIndexById(array:GoodsType[], id:number):number {
      return array.findIndex((item) => item.id === id);
    }
  
    const rearrangedArray:GoodsType[] = [];
  
    myArray.forEach((item) => {
      const index = findIndexById(myArray, item.id);
      rearrangedArray[index] = item;
    });
  
    return rearrangedArray;
  }
    
  const newGoodsAllWithId: GoodsType[] = rearrangeArrayByIndex(goodsAll)


  useEffect(() => {
    
    setsGoods(goodsAll);
    console.log(goods)
  },);
  
  return (
    <Box>
      <Typography variant="h2" justifyContent="center">Second-Hand Goods</Typography>
      <Box>
              <Typography variant="h4" justifyContent="center">Goods List</Typography>
              {goods == null ? (
                <Typography variant="h2" justifyContent="center">No goods available.</Typography>
              ) : (
                <Grid container spacing={1}  justifyContent="center" >
                  {goods.map(goods => (
                    
                    <Grid item xs={9} sm={3} m={3} lg={2} >
                      <Link key={goods.id} to={`/id/${goods.id}`}>
                        <List>
                           <GoodsItem key={goods.id} good={goods}  />
                           </List>
                      </Link>
                    </Grid>
                    
                  ))}
                </Grid>
              )}
            </Box>
      
    </Box>
  );
}

