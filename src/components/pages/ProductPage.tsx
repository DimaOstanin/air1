import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper, Grid, ImageListItem, Button, Card, CardActions, CardContent, CardMedia, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
  
interface GoodsItemProps {
  good: GoodsType;
}
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
export  const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
    return (
        <Box  justifyContent="center" sx={{ width: '100%', maxWidth: 500 }}>
        <Card >
          <CardMedia
            sx={{ height: 250 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {good.name}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            ₪{good.price}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            {good.condition}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            {good.company}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            {good.category}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {good.discription}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography component="span" variant="h3" color="textPrimary" >
            צור בשר
            </Typography>
            <Button size="large">צלצל</Button>
            <Button size="large">What's Up</Button>
            <Button size="large">Telegram</Button>
          </CardActions>
          <CardActions>
          <Typography component="span" variant="h3" color="textPrimary">
            שיטוף מוצר
            </Typography>
            <Button size="large">Share</Button>
            <Button size="large">What's Up</Button>
            <Button size="large">Telegram</Button>
          </CardActions>
          
        </Card>
        </Box>
      );
    
};


