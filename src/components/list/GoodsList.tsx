import React, { useState, useEffect } from 'react';
import { Box, Grid, List, ListItem, Typography, TextField, Select, Button, MenuItem, SelectChangeEvent } from '@mui/material';
import goodsConfig from "../../config/goods-config.json";
import { GoodsItem } from '../items/GoodsItem';
import { GoodsType } from "../../model/GoodsType";
import './item.css'
import { Link } from 'react-router-dom';
import backGround from '../../image/multicam.png';

interface GoodsListProps {
    goods: GoodsType[];
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {

    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('none');
    const [city, setCity] = useState('all');
    const [category, setCategory] = useState("all");
    const [quantity,setQuantity] = useState(goods.length);

    const [filteredGoods, setFilteredGoods] = useState(goods);


    useEffect(() => {

        let filtered = goods.filter(good => good.name.toLowerCase().includes(search.toLowerCase()) ||
            good.company.toLowerCase().includes(search.toLowerCase()) ||
            good.discription.toLowerCase().includes(search.toLowerCase())
        );


        if (city !== 'all') {
            filtered = filtered.filter(good => good.city === city);
        }
        if (category !== 'all') {
            filtered = goods.filter(good => good.category === category);
        }

        if (sort === 'low') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'high') {
            filtered.sort((a, b) => b.price - a.price);
        }


        setFilteredGoods(filtered);
    }, [goods, search, sort, city, category,quantity]);


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        setSort(event.target.value as string);
    };

    const handleCityChange = (event: SelectChangeEvent<string>) => {
        setCity(event.target.value as string);
    };
    const handlerCategoryChange = (event: SelectChangeEvent<string>) => {
        setCategory(event.target.value as string);
    }
    const { minId, maxId, goodsCategory, minPrice, maxPrice, goodsCondition, cities } = goodsConfig;

    return (
        <Box >
           <Typography variant="h4" sx={{ display: "flex", justifyContent: "center", marginTop: "-20px" }}> {filteredGoods.length} מודעות</Typography>
            <Box>
                {/* UI elements for the search, sorting, and city options */}
                <TextField label="חיפוש לפי מילה מפתח" sx={{ marginRight: "10px", marginTop: "10px" }} value={search} onChange={handleSearchChange} />
                <Select label="Sort by price" value={sort} sx={{ marginRight: "10px", marginTop: "10px" }} onChange={handleSortChange}>
                    <MenuItem value="none">למיין לפי מחיר</MenuItem>
                    <MenuItem value="low">מנמוך לגבוה</MenuItem>
                    <MenuItem value="high">מגבוה לנמוך</MenuItem>
                </Select>
                <Select label="Filter by city" value={city} sx={{ marginRight: "10px", marginTop: "10px" }} onChange={handleCityChange}>
                    <MenuItem value="all">עיר</MenuItem>
                    {cities.sort().map(city => <MenuItem value={city}>{city}</MenuItem>)}
                </Select>
                <Select label="Filter by category" value={city} sx={{ marginRight: "10px", marginTop: "10px" }} onChange={handlerCategoryChange} >
                    <MenuItem value='all'>קטגוריה</MenuItem>
                    {goodsCategory.map(category => <MenuItem value={category}>{category}</MenuItem>)}
                </Select>

                {filteredGoods.length === 0 ? (
                    <Typography variant="h2" >לא נמצאו מוצרים</Typography>
                ) : (
                    <Grid container spacing={1} >
                        {filteredGoods.map(good => (
                            <Grid key={good.id} item xs={12} sm={6} md={4} lg={3} >
                                <GoodsItem good={good} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>
        </Box>
    );
};
