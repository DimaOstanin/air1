import React from 'react';
import { makeStyles, createStyles, Theme, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { styled } from "@mui/system";




const imageURL = "https://media.istockphoto.com/id/1051151708/vector/no-weapon-no-guns-sign-vector-illustration.jpg?s=612x612&w=0&k=20&c=mvRtxOsGtligJE__mrlwgKdFvygZGXKoOvjWY1Zf62o=";
const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100vw",
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  
});

export const NoFoundPAge: React.FC = () => {
  

  return (
    <Box justifyContent="center">
      <Typography variant="h1" justifyContent="center">
     שגיאה 404 עמוד לא קיים 
      </Typography>
    <Background />
    </Box>
  );
};


