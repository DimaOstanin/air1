import React, { useState } from 'react';
import { Button } from '@mui/material';
import {GoodsType} from "../model/GoodsType";




interface RandomGoodsCreatorProps {
  onGenerate: (goods: GoodsType[]) => void;
}

const RandomGoodsCreator: React.FC<RandomGoodsCreatorProps> = ({ onGenerate }) => {
  const generateRandomGoods = () => {
    const randomGoods: GoodsType[] = [];

    // Generate 5 random goods
    for (let i = 0; i < 5; i++) {
      const id = i + 1;
      const name = `Item ${id}`;
      const price = Math.floor(Math.random() * 100) + 1;
      const image = `https://example.com/image${id}.jpg`;
      const company = `Company ${id}`;
      const condition = `Condition ${id}`;
      const city = `City ${id}`;

      randomGoods.push({ id, name, price, image, company, condition, city });
    }

    onGenerate(randomGoods);
  };

  return (
    <div>
      <Button variant="contained" onClick={generateRandomGoods}>
        Generate Random Goods
      </Button>
    </div>
  );
};

export default RandomGoodsCreator;
