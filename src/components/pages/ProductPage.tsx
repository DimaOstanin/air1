import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import  {firestore}  from '../../config/firebase-config'
import {collection,  getFirestore, getDocs,getDoc, setDoc, doc, deleteDoc, DocumentSnapshot} from 'firebase/firestore';
import { db } from '../../config/firebase-config';
// interface GoodsItemProps {
//   good: GoodsType;
// }
const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
export  const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<GoodsType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'Goods', id); // Use the correct methods
        const docSnap = await getDoc(productRef);

        if (docSnap.exists()) {
          const productData= docSnap.data();
          setProduct(productData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };


    fetchProduct();
  }, [id]);

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


