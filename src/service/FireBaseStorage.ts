import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { storage } from '../config/firebase-config';
import { v4 as uuidv4 } from 'uuid';

export const FireBaseStorage = () => {
    const[progress, setProgress] = useState<Number>(0);
    const[error, setError] = useState<Error | null>(null);
    const[url, setUrl] = useState<string | null>(null);

    const startUpload = (file:File) =>{
        if(!file){
            return;
        }
        const fileId = uuidv4();
        console.log(file);
        const formatFile = file.type.split('/')[1];
        const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
        const uploadTask = uploadBytesResumable(storageRef ,file);

        uploadTask.on('state_changed', (snapshot) =>{
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
        },(error) =>{
            setError(error);
        }, () =>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
                console.log(downloadURL);
                setUrl(downloadURL);
            })
        })
    }

  return {
    progress , error, url, startUpload
  }
}
