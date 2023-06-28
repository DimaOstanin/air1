import React, { useState } from 'react';
import GoodsInteface from "../interface/GoodsInterface";

interface GoodsFormProps {
  onAdd: (goods: GoodsInteface) => void;
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
      <h2>Add Goods</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={handlePriceChange} />
      </div>
      <div>
        <label htmlFor="image" >Image URL:</label>
        <input type="text" id="image" value={image} onChange={handleImageChange} />
      </div>
      <div>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" value={company} onChange={handleCompanyChange} />
      </div>
      <div>
        <label htmlFor="condition">Condition:</label>
        <input type="text" id="condition" value={condition} onChange={handleConditionChange} />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={handleCityChange} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default GoodsForm;
