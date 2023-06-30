import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';



interface GoodsItemProps {
  good: GoodsType;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
    return (
    <ListItem>
        <ListItemAvatar>
            <Avatar src={good.image} alt={good.name} />
        </ListItemAvatar>
        <ListItemText
            primary={good.name}
            secondary={<>
                <Typography component="span" variant="body2" color="textPrimary">
                    Price: ${good.price}
                </Typography>
                <br />
                Company: {good.company}
                <br />
                Condition: {good.condition}
                <br />
                City: {good.city}
            </>} />
    </ListItem>
);
};


export default GoodsItem;
