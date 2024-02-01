import React, { ReactNode, useRef } from 'react';
import { GoodsType } from "../../model/GoodsType";
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Box, Divider, Modal, Alert } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { firestore } from '../../config/firebase-config'
import { collection, getFirestore, getDocs, getDoc, setDoc, doc, deleteDoc, DocumentSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import { Image } from '@mui/icons-material';
import { CompanyFirebase } from '../../service/CompanyFirebase';
import { useDispatch, useSelector } from 'react-redux';
import generationConfig from '../../config/generation-config.json';
import { goodsActions } from "../../redux/goodsSlice";
import { GoodsForm } from '../forms/GoodsForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const theme = createTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<GoodsType | null>(null);
  const [authorButtons, setAuthorButtons] = useState<boolean>(false)

  const authUser: string = useSelector<any, string>(state => state.auth.authenticated);
  const dispatch = useDispatch();
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [deleting, setdeleting] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const productRef = doc(db, 'Goods', id);
          const docSnap = await getDoc(productRef);

          if (docSnap.exists()) {
            const productData = docSnap.data() as GoodsType;
            setProduct(productData);
            console.log(productData.authorEmail)
            if (productData.authorEmail == authUser) {
              setAuthorButtons(true);
            }

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

  function deleteGood() {
    dispatch(goodsActions.removeGoods(id))
    setdeleting(true);
    setTimeout(() => navigate("/Yad2"), 3000);

  }

  const navigate = useNavigate();
  function getComponent(): ReactNode {
    return <GoodsForm onAdd={function (product: any) {

      dispatch(goodsActions.updateEmployee(product));

      return true;
    }} goodsUpdate={product as GoodsType} />


  }

  return (
    <Box>
      {product && (
        <Box key={product.id} justifyContent="center" sx={{ width: '100%', maxWidth: '100%', maxHeight: '100%' }}>
          {authorButtons &&
            <Box >
              <Button onClick={() => setOpenDeleteModal(true)} sx={{ marginRight: "10px" }} variant="contained">DELETE</Button>
              <Button onClick={() => setOpenEditModal(true)} variant="contained" >edit</Button>

              <div>
                <Modal
                  open={openDeleteModal}
                  onClose={() => setOpenDeleteModal(false)}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width: 200 }}>
                    <Typography>?האם אתה באמת רוצה למחוק</Typography>
                    <Button sx={{ m: 1 }} onClick={deleteGood} variant="contained">כן</Button>
                    <Button onClick={() => setOpenDeleteModal(false)} variant="contained">לא</Button>
                    {deleting && <Alert severity="success"> הקובץ נמחק בהצלחה </Alert>}

                  </Box>
                </Modal>
                <Modal
                  open={openEditModal}
                  onClose={() => setOpenEditModal(false)}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, width:"100%"}}>
                    <GoodsForm onAdd={function (product: any) {

                      dispatch(goodsActions.updateGoodsType(product));

                      return true;
                    }} goodsUpdate={product as GoodsType} />
                  </Box>
                </Modal>
              </div>

            </Box>

          }
          <Card >

            <CardContent>
              <img src={product.image} width={"100%"} />

              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography component="span" variant="h4" color="textPrimary" >
                ₪{product.price}
              </Typography>
              <Divider textAlign="right" >עיר</Divider>
              <Typography component="span" variant="h5" color="textPrimary" >
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
        </Box>)}
    </Box>
  );

};


