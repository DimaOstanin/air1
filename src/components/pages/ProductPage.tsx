import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper, Grid, ImageListItem, Button, Card, CardActions, CardContent, CardMedia, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
// interface GoodsItemProps {
//   good: GoodsType;
// }
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
export  const ProductPage: React.FC = () => {
  const goodsAll = useSelector<any, GoodsType[]>(state => state.goodsBox.goods);
  

  const {id} = useParams();
  const [product ,setProduct] = useState<GoodsType|null>();
  
  function getObjectById(array:GoodsType[], id:number):GoodsType | null {
    
    for (const obj of array) {
      
      if (obj.id === id) {
        return  obj;
      }
    }
    return null; // Return null if the object with the given ID is not found
  }
  const objectWithId = getObjectById(goodsAll,Number(id));

  useEffect(() =>{
    setProduct(objectWithId)
    
  },[id]);

    return (
      <Box>
        {product &&(
           <Box  key={product.id} justifyContent="center" sx={{ width: '100%', maxWidth: 500 }}>
        <Card >
          <CardMedia
            sx={{ height: 250 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {product.name}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            ₪{product.price}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            {product.condition}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            {product.company}
            </Typography>
            <Typography component="span" variant="body2" color="textPrimary">
            {product.category}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {product.discription}
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
        </Box> )}
        </Box>
      );
    
};


