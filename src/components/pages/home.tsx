 
import React from "react";
import { Typography} from "@mui/material";
import { Profile } from "./Profile";

export const Home: React.FC = () => {
  
  return (
    <div >
      <Typography sx={{m:5}} variant="h3" >
        ברוכים הבאים לאיירסופט1
      </Typography>
      <Typography sx={{m:5}} variant="body1">
      כאן תוכלו למצוא מידע על איירסופט
      </Typography>
      <Profile/>
    </div>
    

  );
};

// Define the interface for the props



