import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import PropTypes from 'prop-types';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default function InputField(props) {
  const { form, name, label } = props;

  const {errors} = form
  const hasError = errors?.[name]
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
        as ={TextField}
        fullWidth
        // autoFocus
        label={label}
        error={!!hasError}
        helperText={errors[name]?.message}
      />
    </Box>
  );
}
