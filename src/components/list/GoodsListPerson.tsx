import React, { useState, useEffect } from 'react';
import { Box, Grid, List, ListItem, Typography, TextField, Select, Button, MenuItem, SelectChangeEvent } from '@mui/material';
import goodsConfig from "../../config/goods-config.json";
import { GoodsItem } from '../items/GoodsItem';
import { GoodsType } from "../../model/GoodsType";
import './item.css'
import { Link } from 'react-router-dom';
import backGround from '../../image/multicam.png';
import { useSelector } from 'react-redux';

interface GoodsListProps {
    goods: GoodsType[];
}

export const GoodsListPerson: React.FC<GoodsListProps> = ({ goods }) => {

    
    return (
        <Box >
           <Typography variant="h4" sx={{ display: "flex", justifyContent: "center", marginTop: "-20px" }}> {goods.length} מודעות</Typography>
            <Box>
                

                {goods.length === 0 ? (
                    <Typography variant="h2" >לא נמצאו מוצרים</Typography>
                ) : (
                    <Grid container spacing={1} >
                        {goods.map(good => (
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
