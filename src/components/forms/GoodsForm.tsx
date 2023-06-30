import React, { useState } from 'react';
import {GoodsType} from "../../model/GoodsType";
import { TextField, Button, Typography} from '@mui/material';
import RandomGoodsCreator from '../../utils/RandomGoodsCreator';


interface GoodsFormProps {
  onAdd: (goods: GoodsType) => void;
}

const GoodsForm: React.FC<GoodsFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [company, setCompany] = useState('');
  const [condition, setCondition] = useState('');
  const [city, setCity] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handleConditionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCondition(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newGoods = {
        
      name,
      price: parseFloat(price),
      image,
      company,
      condition,
      city,
    };

    onAdd(newGoods);

    setName('');
    setPrice('');
    setImage('');
    setCompany('');
    setCondition('');
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4">Add Goods</Typography>
      <TextField
        label="Name"
        value={name}
        onChange={event => setName(event.target.value)}
        required
      />
      <br />
      <TextField
        label="Price"
        type="number"
        value={price}
        onChange={event => setPrice(event.target.value)}
        required
      />
      <br />
      <TextField
        label="Image URL"
        value={image}
        onChange={event => setImage(event.target.value)}
      />
      <br />
      <TextField
        label="Company"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />
      <br />
      <TextField
        label="Condition"
        value={condition}
        onChange={event => setCondition(event.target.value)}
      />
      <br />
      <TextField
        label="City"
        value={city}
        onChange={event => setCity(event.target.value)}
      />
      <br />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
      
    </form>
    
  );
};

export default GoodsForm;
