import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GoodsInteface from "./components/interface/GoodsInterface";
import GoodsItem from './components/items/GoodsItem';
import GoodsForm from './components/forms/GoodsForm';
import GoodsList from './components/list/GoodsList';

function App() {

  const [goods, setGoods] = useState<GoodsInteface[]>([]);

  const addGood = (good: GoodsInteface) => {
    const newGood: GoodsInteface = {
       id: Date.now(),
      ...good,
    };

    setGoods(prevGoods => [...prevGoods, newGood]);
  };

  return (
    <div>
      <h1>Second-Hand Goods</h1>
      <GoodsForm onAdd={addGood} />
      <GoodsList goods={goods} />
    </div>
  );
}

export default App;
