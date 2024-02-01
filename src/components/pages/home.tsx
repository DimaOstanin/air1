 
import React from "react";
import { Typography} from "@mui/material";
import { Profile } from "./Profile";

export const Home: React.FC = () => {
  
  return (
    <div >
      <Typography key={1} sx={{m:5, display:"flex",justifyContent:'center'}} variant="h3" >
         ברוכים הבאים לאיירסופט 1 
      </Typography>
      <Typography sx={{m:5}} variant="body1">
      באתר שלנו אתה יכול לשים את כלי האיירסופט שלך למכירה ולקנות מאחרים     
      </Typography>
      <Profile/>
    </div>
    

  );
};

// Define the interface for the props



