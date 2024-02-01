import React, { useState } from 'react';
import { GoodsType } from "../../model/GoodsType";
import { TextField, Button, Box, Grid, FormControl, InputLabel, Select, MenuItem, Stack, Container, Alert, Modal } from '@mui/material';
import goodsConfig from "../../config/goods-config.json";
import { useSelector } from 'react-redux';
import { FireBaseStorage } from '../../service/FireBaseStorage';
import { useNavigate } from 'react-router-dom';
import './formStyles.css';
type GoodsFormProps = {
  onAdd: (goods: GoodsType) => boolean,
  goodsUpdate?: GoodsType
}

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


export const GoodsForm: React.FC<GoodsFormProps> = ({ onAdd, goodsUpdate }) => {
  const authUser = useSelector<any, string>(state => state.auth.authenticated);
  const initialGoods: GoodsType = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    image: '',
    company: '',
    condition: '',
    city: '',
    discription: '',
    authorEmail: authUser
  }
  const [goods, setGoods] = useState<GoodsType>(goodsUpdate ? goodsUpdate : initialGoods);
  
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [imageloaded, setImageLoaded] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  
  
  
  const { startUpload, url } = FireBaseStorage();
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageLoaded(false);
    const file = event.target.files?.[0];
    setSelectedFile(event.target.files?.[0])
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };

      reader.readAsDataURL(file);
    }

  };

  const { minId, maxId, goodsCategory, minPrice, maxPrice, goodsCondition, cities } = goodsConfig;



  function handlerName(event: any) {
    const name = event.target.value;
    const goodsCopy = { ...goods };
    goodsCopy.name = name;
    setGoods(goodsCopy);
  }
  function handlerPrice(event: any) {
    const price = event.target.value;
    const goodsCopy = { ...goods };
    goodsCopy.price = price;
    setGoods(goodsCopy);
  }
  function handlerCategory(event: any) {
    const category = event.target.value;
    const goodsCopy = { ...goods };
    goodsCopy.category = category;
    setGoods(goodsCopy);
  }
  function handlerCompany(event: any) {
    const company = event.target.value;
    const goodsCopy = { ...goods };
    goodsCopy.company = company;
    setGoods(goodsCopy);
  }
  function handlerCondition(event: any) {
    const condition = event.target.value;
    const goodsCopy = { ...goods };
    goodsCopy.condition = condition;
    setGoods(goodsCopy);
  }
  function handlerCity(event: any) {
    const city = event.target.value;
    const goodsCopy = { ...goods };
    goodsCopy.city = city;
    setGoods(goodsCopy);
  }
  function handlerDiscription(event: any) {
    const discription = event.target.value;
    const goodsCopy = { ...goods };
    goodsCopy.discription = discription;
    setGoods(goodsCopy);
  }
  function handlerAuthor() {
    
    const goodsCopy = { ...goods };
    goodsCopy.authorEmail = authUser;
    setGoods(goodsCopy);
  }
  function handlerImageUrl() {
    const goodsCopy = { ...goods };
    goodsCopy.image = imageUrl;
    setGoods(goodsCopy);
  }
  function onClickdownload() {
    if (selectedFile) {
      startUpload(selectedFile);
      console.log(selectedFile);
      setImageLoaded(true);
    }
    handlerImageUrl();
    
  }
  function onSubmitFn(event: any) {
    handlerAuthor();
     handlerImageUrl();
    event.preventDefault();
    onAdd(goods);
    document.querySelector('form')!.reset();
    setOpen(true)
    setTimeout(goBack, 3000);
  }
  function onResetFn(event: any) {
    setGoods(goodsUpdate ? goodsUpdate : initialGoods);
  }
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return <Box sx={{ marginTop: { sm: "25vh" } }}>
    <form onSubmit={onSubmitFn} onReset={onResetFn}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={8} sm={8}  key={1}>
          <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column" }}>

            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="upload-image">
                <Button variant="contained" component="span">
                  לבחור תמונה
                </Button>

                <input
                  id="upload-image"
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={handleFileUpload}
                />
              </label>

            </Stack>
            {imageUrl && <img src={imageUrl} alt="Uploaded Image" height="300" />}
            {imageUrl && <Button onClick={onClickdownload} variant="contained" component="span">
              העלאת תמונה
            </Button>}
            {imageloaded && <Alert severity="success">הקובץ הועלה בהצלחה</Alert>}


          </Container>
        </Grid>
        <Grid item xs={8} sm={5} key={2}>
          <FormControl fullWidth required>
            <InputLabel id="select-category-id">קטגוריה</InputLabel>
            <Select labelId="select-category-id-1" label="קטגוריה"
              value={goods.category} onChange={handlerCategory}>
              <MenuItem value=''>None</MenuItem>
              {goodsCategory.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={5} key={3}>
          <TextField type="text" required fullWidth label="שם המוצר"
            helperText="הזן את שם המוצר" onChange={handlerName}
            value={goods.name}
          />
        </Grid>

        <Grid item xs={8} sm={5} key={4} >
          <TextField label="מחיר" fullWidth required
            type="number" onChange={handlerPrice}
            value={goods.price || ''}
            helperText={`[${minPrice}-${maxPrice}] הזן מחיר בין `}
            inputProps={{
              min: `${minPrice}`,
              max: `${maxPrice}`
            }} InputLabelProps={{
              shrink: !!goodsUpdate || !!goods.price
            }} />
        </Grid>
        <Grid item xs={8} sm={5} key={5}>
          <TextField type="text" required fullWidth label="שם החברה"
            helperText="הזן את שם החברה" onChange={handlerCompany}
            value={goods.company}
          />
        </Grid>
        <Grid item xs={8} sm={5} key={6}>
          <FormControl fullWidth required>
            <InputLabel id="select-condition-id">קטגוריה</InputLabel>
            <Select labelId="select-condition-id" label="מצב"
              value={goods.condition} onChange={handlerCondition}>
              <MenuItem value=''>None</MenuItem>
              {goodsCondition.map(condition => <MenuItem key={condition} value={condition}>{condition}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={8} sm={5} key={7}>
          <FormControl fullWidth required>
            <InputLabel id="select-city-id">עיר</InputLabel>
            <Select labelId="select-city-id" label="עיר"
              value={goods.city} onChange={handlerCity}>
              <MenuItem value=''>None</MenuItem>
              {cities.sort().map(city => <MenuItem key={city} value={city}>{city}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={5} key={8}>
          <TextField multiline type="text" required fullWidth label="תיאור"
            helperText="תאר את המוצר והוסף את מה שמגיע איתו" onChange={handlerDiscription}
            value={goods.discription}
          />
        </Grid>
      </Grid>




      <Box sx={{ marginTop: { xs: "10vh", sm: "5vh" }, textAlign: "center" }} key={9}>
        <div>

          <Modal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 400 }}>

              <Alert severity="success">הקובץ נוסף בהצלחה</Alert>

            </Box>
          </Modal>
        </div>
        <Button type="submit" variant="contained" sx={{ marginRight: '15px' }}>Submit</Button>
        <Button type="reset" variant="contained" sx={{ marginRight: '15px' }}>Reset</Button>
      </Box>



    </form>
  </Box>
}