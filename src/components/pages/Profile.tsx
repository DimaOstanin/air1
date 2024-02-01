 
import React, { useEffect, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { GoodsListPerson } from "../list/GoodsListPerson";
import { Link } from "react-router-dom";
import { GoodsType } from "../../model/GoodsType";
import { useSelector } from "react-redux";

export const Profile: React.FC = () => {
   

  return (
    <div>
        <Link to={'/create'}>
        <Button variant="contained" >Create product</Button>
        </Link>
        {/* <GoodsListPerson goods={goods}/> */}
     
      
    </div>
    

  );
};





