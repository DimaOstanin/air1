import React from 'react';
import { GoodsType } from "../../model/GoodsType";
import { ListItem, Typography, Grid,  Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
interface GoodsItemProps {
  good: GoodsType;
}

export const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {

  return (
    <ListItem key={good.id} sx={{ padding: "0rem", flexGrow: "1", backgroundColor: "#0a0a0a", borderRadius: "15px", margin: "10px 0", marginRight: "10px", width: "260px", height: "400px" }}>
      <Grid>
        <Link to={`/Yad2/${good.id}`} style={{ textDecoration: 'none' }}>
          <Card sx={{ maxWidth: 260, minWidth: 260, height: "400px", boxShadow: "0 8px 16px 0 rgba(0,0, 75, 43.2)", backgroundColor: "#0a0a0a", color: "#0ff", borderRadius: "15px", margin: "10px 0", width: "260px" }}>
            <CardMedia
              component="div"
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
