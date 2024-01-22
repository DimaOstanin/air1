import React from 'react';
import { GoodsType } from "../../model/GoodsType";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper, Grid, ImageListItem, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ProductPage } from '../pages/ProductPage';
import { Link } from 'react-router-dom';
interface GoodsItemProps {
  good: GoodsType;
}

export const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
  return (
    <ListItem key={good.id} sx={{ padding: "0rem", flexGrow: "1", backgroundColor: "#0a0a0a", borderRadius: "15px", margin: "10px 0", marginRight: "10px", width: "260px", height: "400px" }}>
      <Grid>
      <Link to={`/Yad2/${good.id}`}>
        <Card sx={{ maxWidth: 260, minWidth: 260, height: "400px", boxShadow: "0 8px 16px 0 rgba(0,255,255,0.2)", backgroundColor: "#0a0a0a", color: "#0ff", borderRadius: "15px", margin: "10px 0",  width: "260px" }}>
          <CardMedia
            sx={{ height: 200, width: null, padding: "1em 1em 0 1em", esizeMode: 'cover' }}
            image={good.image}
            title={good.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
              {good.name}
            </Typography>
            <Typography component="span" variant="h5" sx={{ fontWeight: "bold" }}>
              ₪{good.price}
            </Typography>
            <>
              <br />
              <Typography variant="body2" component="p">
                {good.condition}
              </Typography>
              <Typography variant="body2" component="p">
                {good.city}
              </Typography>
            </>
          </CardContent>
          
        </Card>
        </Link>
      </Grid>
    </ListItem>
  );
};
