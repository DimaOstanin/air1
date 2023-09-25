import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper, Grid, ImageListItem, Button, Card, CardActions, CardContent, CardMedia} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ProductPage} from '../pages/ProductPage';
import { Link } from 'react-router-dom';
interface GoodsItemProps {
  good: GoodsType;
}
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
export  const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
    return (
      <ListItem key={good.id} sx={{ padding: "0rem", flexGrow: "1"}}>
        <Grid  >
        <Card sx={{ maxWidth: 345 ,minWidth: 345 }}>
          <CardMedia
            sx={{ height: 250 ,padding: "1em 1em 0 1em" , objectFit: "contain"}}
            image={good.image}
            title={good.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {good.name}
            </Typography>
            <Typography component="span" variant="h5" color="textPrimary">
            ₪{good.price}
            </Typography>
                <>
                    <br />
                    {good.condition} 
                    <br />
                    {good.city} 
                </>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">
              <Link to={`/Yad2/${good.id}`}>More</Link>
            </Button>
          </CardActions>
          
        </Card>
        </Grid>
        </ListItem>
      );
    
};

