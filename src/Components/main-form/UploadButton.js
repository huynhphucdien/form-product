import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const Input = styled('input')({
  display: 'none',
});

export default function UploadButtons({sentAvarta}) {

  const [avarta, setAvarta] = useState()

  useEffect(() => {
    return ()=> {
      if (avarta){
        URL.revokeObjectURL(avarta.preview)
      }
    }
  }, [avarta])
  const handleChange= (e)=>{
    const file = e.target.files[0];
    console.log(file.name);
    file.preview= URL.createObjectURL(file);
    setAvarta(file);
    sentAvarta(file);
  }

  return (
    <Stack direction="row" alignItems="right" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleChange}/>
        <Button variant="outlined" color="inherit" component="span">
          Upload
        </Button>
      </label>
      {avarta && <img src={avarta.preview} alt="" width="50%" />}
    </Stack>
  );
}