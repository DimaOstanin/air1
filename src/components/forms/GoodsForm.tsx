import React, { useState } from 'react';
import {GoodsType} from "../../model/GoodsType";
import { TextField, Button, Typography, Box, Grid, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import goodsConfig from "../../config/goods-config.json";
import { useSelector } from 'react-redux';

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
    
  const {minId,maxId, goodsCategory,minPrice, maxPrice,goodsCondition,cities} = goodsConfig;
    function handlerAuthor(){
        const goodsCopy = {...goods};
        goodsCopy.authorEmail = authUser;
        setGoods(goodsCopy);  
    }
  
  
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
  function onSubmitFn(event: any) {
    handlerAuthor();
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
            <TextField type="text" required fullWidth label="תיאור"
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