import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";
import { useState } from "react";

const currencies = [
  {
    value: 1,
    label: "--Type Smartphone--",
  },
  {
    value: 2,
    label: "SAMSUNG",
  },
  {
    value: 3,
    label: "IPHONE",
  },
  {
    value: 4,
    label: "XIAOMI",
  },
];

export default function InputSelect(props) {
  const [id, setId] = useState("1");

  const { form, name, getLabel, onSubmit, disabled } = props;

  const handleInput = (event) => {
    const newId = event.target.value;
    let selectedLabel = currencies.find((item) => {
      return item.value === Number(event.target.value);
    });
    // setId(newId);
    onSubmit(newId);
    getLabel(selectedLabel)
    // console.log(newId);
  };

  const { errors } = form;
  const hasError = errors?.[name];

  return (
    <Box
      component="form"
      Validate
      autoComplete="off"
      sx={{
        "& .MuiTextField-root": { mb: 2 },
      }}
    >
      {/* <Controller
        control={form.control}
        name={name}
        as={TextField}
        id="outlined-select-currency"
        select
        value={id}
        onChange={handleChange}
        // onInput={handleInput}
        fullWidth
        label={label}
        error={!!hasError}
        helperText={errors[name]?.message}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Controller> */}
      <Controller
        control={form.control}
        name={name}
        as={TextField}
        disabled={disabled}
        id="standard-select-currency-native"
        select
        // value={id}
        SelectProps={{
          native: true,
        }}
        fullWidth
        error={!!hasError}
        helperText={errors[name]?.message}
        onInput={handleInput}
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Controller>
    </Box>
  );
}
