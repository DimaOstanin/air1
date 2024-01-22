import React from 'react';
import { Box, Grid, List, ListItem,  Typography } from '@mui/material';

import {GoodsItem} from '../items/GoodsItem';
import {GoodsType} from "../../model/GoodsType";
import './item.css'
import { Link } from 'react-router-dom';

interface GoodsListProps {
  goods: GoodsType[];
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
      <Box>
          <Typography variant="h4" sx={{display:"flex",justifyContent:"center",marginTop: "-60px"}}>Second-Hand Goods</Typography>
          <Box>
              
              {goods == null ? (
                  <Typography variant="h2" >No goods available.</Typography>
              ) : (
                  <Grid container spacing={1}>
                      {goods.map(goods => (
                          <Grid key={goods.id} item xs={12} sm={6} md={4} lg={3}>
                              <GoodsItem good={goods}  />
                          </Grid>
                      ))}
                  </Grid>
              )}
          </Box>
      </Box>
  );
};
