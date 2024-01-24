 
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { UploadForm } from '../forms/UploadForm';
import { Link } from "react-router-dom";

export const Profile: React.FC = () => {
  
    

  return (
    <div >
        <Link to={'/create'}>
        <Button variant="contained" >Create product</Button>
        </Link>
     
      
    </div>
    

  );
};

// Define the interface for the props



