import React from 'react';
import { makeStyles, createStyles, Theme } from '@mui/material';
import { Typography } from '@mui/material';


export const About: React.FC = () => {
  

  return (
    <div>
      <Typography sx={{m:5,}} variant="h3" >
      </Typography>
      <Typography sx={{m:5, }} variant="h3">
      אתר זה נוצר עבור ההתיישבות ולמען שיפור וקידום איירסופט בארץ     
       </Typography>
       <Typography sx={{m:5, }} variant="h5" >
       אתר בפיתוח
      </Typography>
    </div>
  );
};


