import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';



function Input(props) {
  const { form, name, label, disabled = false } = props;
  const {errors} = form
  const hasError = errors?.[name]

  // console.log(form)
  // console.log(errors)


    return (
        
            <Controller
        control={form.control}
        name={name}
        as={TextField}

        fullWidth
        label={label}
        disabled={disabled}
        error={!!hasError}
        helperText={errors[name]?.message}
      />
        
    );
}

export default Input;