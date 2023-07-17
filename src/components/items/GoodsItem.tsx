import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Paper, Grid, ImageListItem, Button, Card, CardActions, CardContent, CardMedia, Link } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ProductPage} from '../pages/ProductPage';

interface GoodsItemProps {
  good: GoodsType;
}
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
export  const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
    return (
        <Grid  >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://t3.ftcdn.net/jpg/03/21/62/56/360_F_321625657_rauGwvaYjtbETuwxn9kpBWKDYrVUMdB4.jpg"
            title="green iguana"
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
            <Button size="small">More</Button>
            <Link
                component="button"
                 variant="body2"
                 onClick={() => {
                   <ProductPage good={good}/>
                                }}
                  >
                Button Link
            </Link>
          </CardActions>
          
        </Card>
        </Grid>
      );
    
};





// return (
//     <ThemeProvider theme={theme}>
// <Grid >
//     <Paper  sx={{width:{xs: '60vh', sm: '55vw', lg: '90vw'}} }>
        
//     <ListItemAvatar>
//         <Avatar src={good.image} alt={good.name} />
//     </ListItemAvatar>
//     <ImageListItem>
        
//     </ImageListItem>
//     <ListItemText 
//         primary={good.name}
//         secondary={<>
//             <Typography component="span" variant="body2" color="textPrimary">
//                 שקל{good.price}
//             </Typography>
//             <br />
//             {good.condition} מצב
//             <br />
//             {good.city} עיר
            
//         </>} />
        
//         </Paper>
// </Grid>
// </ThemeProvider>
// );