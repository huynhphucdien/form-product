import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function InputFieldGia(props) {
  const { form, name, label, onSubmit } = props;

  const { errors } = form;
  const hasError = errors?.[name];

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { mb: 2, mt: 2 },
      }}
    >
      <Controller
        control={form.control}
        name={name}
        as={TextField}
        id="outlined-required"
        fullWidth
        required
        label={label}
        error={!!hasError}
        helperText={errors[name]?.message}
      />
    </Box>
  );
}
