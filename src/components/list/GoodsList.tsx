import React from 'react';
import { Box, Grid, List, ListItem,  Typography } from '@mui/material';

import {GoodsItem} from '../items/GoodsItem';
import {GoodsType} from "../../model/GoodsType";


interface GoodsListProps {
  goods: GoodsType[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
    
        return (
            <Box>
              <Typography variant="h4">Goods List</Typography>
              {goods == null ? (
                <Typography variant="body1">No goods available.</Typography>
              ) : (
                <Grid container spacing={1}  justifyContent="center" >
                  {goods.map(goods => (
                    
                    <Grid item xs={9} sm={5} m={3} lg={2} key={goods.id}>
                      <GoodsItem  good={goods} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          );
        };

export default GoodsList;
