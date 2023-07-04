import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


interface GoodsItemProps {
  good: GoodsType;
}
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
    return (
        <ThemeProvider theme={theme}>
    <ListItem >
        <Paper  sx={{width:{xs: '60vh', sm: '55vw', lg: '90vw'}} }>
            
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
            
            </Paper>
    </ListItem>
    </ThemeProvider>
);
};


export default GoodsItem;
