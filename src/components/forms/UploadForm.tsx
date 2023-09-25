import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, Stack, Button, Container } from '@mui/material';
import { Typography } from '@mui/material';
import { FireBaseStorage } from '../../service/FireBaseStorage';


export const UploadForm: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);
    const [selectedFile , setSelectedFile] = useState<File| null |ArrayBuffer|string>(null);

    const {startUpload} = FireBaseStorage();
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
    
        if (file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            setImageUrl(reader.result as string);
          };
    
          reader.readAsDataURL(file);
        }
      };
    


    const handleSubmit = (el: React.FormEvent<HTMLFormElement>)=>{
        el.preventDefault();
        if(selectedFile){
             startUpload(selectedFile);
            console.log(selectedFile);
        }
        setSelectedFile(null);
    }
  return (
    <div >
      <Typography sx={{m:5}} variant="h3" >
        uploadform
      </Typography>
      
      <form onSubmit={handleSubmit}>
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="upload-image">
          <Button  variant="contained" component="span">
            Upload
          </Button>
          <input
            id="upload-image"
            hidden
            accept="image/*"
            type="file"
            onChange={handleFileUpload}
          />
        </label>
        {imageUrl && <img src={imageUrl} alt="Uploaded Image" height="300" />}
      </Stack>
    </Container>
    <Button  variant="contained" component="span">load</Button>
    </form>
    </div>
  );
};

