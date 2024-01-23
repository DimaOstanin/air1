import React from 'react';
import {GoodsType} from "../../model/GoodsType";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Box, Divider } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import  {firestore}  from '../../config/firebase-config'
import {collection,  getFirestore, getDocs,getDoc, setDoc, doc, deleteDoc, DocumentSnapshot} from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { Image } from '@mui/icons-material';

const theme = createTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
  });
export  const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<GoodsType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const productRef = doc(db, 'Goods', id);
          const docSnap = await getDoc(productRef);

          if (docSnap.exists()) {
            const productData = docSnap.data() as GoodsType ;
            setProduct(productData);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      }
    };

    fetchProduct();
}, [id]);
 

    return (
      <Box>
        {product &&(
           <Box  key={product.id} justifyContent="center" sx={{ width: '100%', maxWidth: '100%' ,maxHeight: '100%'}}>
        <Card >
         
          <CardContent>
            <img src={product.image} width={"100%"}/>
          
            <Typography gutterBottom variant="h5" component="div">
            {product.name}
            </Typography>
            <Typography component="span" variant="h4"  color="textPrimary" >
            ₪{product.price}
            </Typography>
            <Divider textAlign="right" >עיר</Divider>
            <Typography component="span" variant="h5"  color="textPrimary" >
            {product.city}
            </Typography>
            <Divider textAlign="right" >מצב המוצר</Divider>
            <Typography component="span" variant="h5" color="textPrimary" >
            {product.condition}
            </Typography>
            <Divider textAlign="right" >חברה</Divider>
            <Typography component="span" variant="h5" color="textPrimary" >
            {product.company}
            </Typography>
            <Divider textAlign="right" >קטגוריה</Divider>
            <Typography component="span" variant="h5" color="textPrimary" >
            {product.category}
            </Typography>
            <Divider textAlign="right" >על המוצר</Divider>
            <Typography variant="h6" color="text.secondary">
              {product.discription}
            </Typography>
          </CardContent>
          <Divider>  צור כשר</Divider>
          
          <CardActions>
            <Button size="large">צלצל</Button>
            <Button size="large">What's Up</Button>
            <Button size="large">Telegram</Button>
          </CardActions>

          <Divider>    שיטוף מוצר</Divider>
          
          <CardActions>
          
            <Button size="large">Share</Button>
            <Button size="large">What's Up</Button>
            <Button size="large">Telegram</Button>
          </CardActions>
          
        </Card>
        </Box> )}
        </Box>
      );
    
};


