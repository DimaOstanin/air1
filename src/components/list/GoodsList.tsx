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
          <Typography variant="h2" justifyContent="center">Second-Hand Goods</Typography>
    
          <Box>
                  <Typography variant="h4" justifyContent="center">Goods List</Typography>
                  {goods == null ? (
                    <Typography variant="h2" justifyContent="center">No goods available.</Typography>
                  ) : (
                    <Grid container spacing={1}   >
                      {goods.map(goods => (
                        
                        <Grid  key={goods.id} item xs={10} sm={4.5} m={3} lg={3.1}  >
                         
                              
                               <GoodsItem  good={goods}  />
                               
                          
                        </Grid>
                        
                      ))}
                    </Grid>
                  )}
                </Box>
          
        </Box>
          );
        };


