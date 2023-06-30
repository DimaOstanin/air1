import React from 'react';
import { List, ListItem,  Typography } from '@mui/material';

import GoodsItem from '../items/GoodsItem';
import {GoodsType} from "../../model/GoodsType";


interface GoodsListProps {
  goods: GoodsType[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
    
        return (
            <div>
              <Typography variant="h4">Goods List</Typography>
              {goods == null ? (
                <Typography variant="body1">No goods available.</Typography>
              ) : (
                <List>
                  {goods.map(goods => (
                    <ListItem key={goods.id}>
                      <GoodsItem good={goods} />
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          );
        };

export default GoodsList;
