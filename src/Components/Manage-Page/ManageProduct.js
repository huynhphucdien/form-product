import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ManageProduct() {
  return (
    <Stack spacing={2} direction="row"
    sx={{
      "& .MuiButton-root": { ml: 2, mr: 2},
    }}
    >
      <Button variant="contained">Quản lý sản phẩm</Button>
    </Stack>
  );
}