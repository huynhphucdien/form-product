import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function MultilineTextFields(props) {

  const { form, name, label } = props;

  const {errors} = form
  const hasError = errors?.[name]

  return (
    <Box
      component="form"
      // noValidate  
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { mb: 2 },
      }}
    >
      <Controller
        control={form.control}
        name={name}
        as ={TextField}
        id="outlined-textarea"
        fullWidth
        label={label}
        placeholder="Mô tả"
        multiline
        rows={8}
        error={!!hasError}
        helperText={errors[name]?.message}
     />
     
    </Box>
  );
}
