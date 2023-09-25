import React, { useState } from 'react';
import {GoodsType} from "../../model/GoodsType";
import { TextField, Button, Typography, Box, Grid, FormControl, InputLabel, Select, MenuItem, Stack, Container} from '@mui/material';
import goodsConfig from "../../config/goods-config.json";
import { useSelector } from 'react-redux';
import { FireBaseStorage } from '../../service/FireBaseStorage';

type GoodsFormProps = {
  onAdd: (goods: GoodsType) => boolean,
   goodsUpdate?: GoodsType
}
const initialGoods:GoodsType = {
    id: 0,
    name: '',
    price: 0,
    category: '',
    image: '',
    company: '',
    condition: '',
    city: '',
    discription: '',
    authorEmail: ''
}


export const GoodsForm: React.FC<GoodsFormProps> = ({ onAdd ,goodsUpdate}) => {
    const [goods, setGoods] = useState<GoodsType>(goodsUpdate? goodsUpdate: initialGoods);  
    const authUser = useSelector<any, string>(state => state.auth.authenticated);
    
    const [imageUrl, setImageUrl] = useState<any>(null);
    const [selectedFile , setSelectedFile] = useState<any>(null);

    const {startUpload ,url} = FireBaseStorage();
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile( event.target.files?.[0])
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            setImageUrl(reader.result as string);
          };
    
          reader.readAsDataURL(file);
        }
        
      };

  const {minId,maxId, goodsCategory,minPrice, maxPrice,goodsCondition,cities} = goodsConfig;
    
  
  
  function handlerName(event:any){
    const name = event.target.value;
    const goodsCopy = {...goods};
    goodsCopy.name = name;
    setGoods(goodsCopy);
  }
  function handlerPrice(event:any){
    const price = event.target.value;
    const goodsCopy = {...goods};
    goodsCopy.price = price;
    setGoods(goodsCopy);
  }
  function handlerCategory(event:any){
    const category = event.target.value;
    const goodsCopy = {...goods};
    goodsCopy.category = category;
    setGoods(goodsCopy);
  }
  function handlerCompany(event:any){
    const company = event.target.value;
    const goodsCopy = {...goods};
    goodsCopy.company = company;
    setGoods(goodsCopy);
  }
  function handlerCondition(event:any){
    const condition = event.target.value;
    const goodsCopy = {...goods};
    goodsCopy.condition = condition;
    setGoods(goodsCopy);
  }
  function handlerCity(event:any){
    const city = event.target.value;
    const goodsCopy = {...goods};
    goodsCopy.city = city;
    setGoods(goodsCopy);
  }
  function handlerDiscription(event:any){
    const discription = event.target.value;
    const goodsCopy = {...goods};
    goodsCopy.discription = discription;
    setGoods(goodsCopy);
  }
  function handlerAuthor(){
    const goodsCopy = {...goods};
    goodsCopy.authorEmail = authUser;
    setGoods(goodsCopy);  
}
  function handlerImageUrl (){
    const goodsCopy = {...goods};
    goodsCopy.image = url;
    setGoods(goodsCopy); 
  }
  function onClickdownload( ){
    if(selectedFile){
        startUpload(selectedFile);
       console.log(selectedFile);
   }
   handlerImageUrl();
  }
  function onSubmitFn(event: any) {
    handlerAuthor();
    handlerImageUrl();
    event.preventDefault();
   
  
    onAdd(goods);
    document.querySelector('form')!.reset();
}
function onResetFn(event: any) {
    setGoods(goodsUpdate ? goodsUpdate : initialGoods);
}
  
return <Box sx={{ marginTop: { sm: "25vh" } }}>
<form onSubmit={onSubmitFn} onReset={onResetFn}>
    <Grid container spacing={4} justifyContent="center">
        <Grid item xs={8} sm={8}>
        <Container maxWidth="md" sx={{ mt: 8 }}>
        <Button onClick={onClickdownload} variant="contained" component="span">
            download
          </Button>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-image">
          <Button  variant="contained" component="span">
            Upload
          </Button>
         
          <input
            id="upload-image"
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" height="300" />}
      </Stack>
    </Container>
        </Grid>
        <Grid item xs={8} sm={5} >
            <FormControl fullWidth required>
                <InputLabel id="select-category-id">קטגוריה</InputLabel>
                <Select labelId="select-category-id" label="קטגוריה"
                    value={goods.category} onChange={handlerCategory}>
                    <MenuItem value=''>None</MenuItem>
                    {goodsCategory.map(category => <MenuItem value={category}>{category}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={8} sm={5} >
            <TextField type="text" required fullWidth label="שם המוצר"
                helperText="הזן את שם המוצר"  onChange={handlerName}
                value={goods.name} 
                />
        </Grid>
        
        <Grid item xs={8} sm={5} >
            <TextField label="מחיר" fullWidth required
                type="number" onChange={handlerPrice}
                value={goods.price || ''}
                helperText={`[${maxPrice}-${maxPrice}] הזן מחיר בין `}
                inputProps={{
                    min: `${minPrice}`,
                    max: `${maxPrice}`
                }} InputLabelProps={{
                    shrink: !!goodsUpdate || !!goods.price
                }} />
        </Grid>
        <Grid item xs={8} sm={5} >
            <TextField type="text" required fullWidth label="שם החברה"
                helperText="הזן את שם החברה" onChange={handlerCompany}
                value={goods.company} 
                />
        </Grid>
        <Grid item xs={8} sm={5} >
            <FormControl fullWidth required>
                <InputLabel id="select-condition-id">קטגוריה</InputLabel>
                <Select labelId="select-condition-id" label="מצב"
                    value={goods.condition} onChange={handlerCondition}>
                    <MenuItem value=''>None</MenuItem>
                    {goodsCondition.map(condition => <MenuItem value={condition}>{condition}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        
        <Grid item xs={8} sm={5} >
            <FormControl fullWidth required>
                <InputLabel id="select-city-id">עיר</InputLabel>
                <Select labelId="select-city-id" label="עיר"
                    value={goods.city} onChange={handlerCity}>
                    <MenuItem value=''>None</MenuItem>
                    {cities.sort().map(city => <MenuItem value={city}>{city}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={8} sm={5} >
            <TextField multiline type="text" required fullWidth label="תיאור"
                helperText="תאר את המוצר והוסף את מה שמגיע איתו" onChange={handlerDiscription}
                value={goods.discription} 
                />
        </Grid>
    </Grid>




<Box sx={{ marginTop: {xs: "10vh", sm:"5vh"}, textAlign: "center"}}>
<Button type="submit">Submit</Button>
    <Button type="reset">Reset</Button>
</Box>
    


</form>
</Box>
}