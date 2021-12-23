import { useState } from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Controller } from "react-hook-form";

const currencies = [
  // {
  //   id: 1,
  //   cateId: 1,
  //   label: "--Choose Smartphone--",
  // },
  {
    id: 2,
    cateId: 2,
    label: "SAMSUNG GALAXY NOTE 21",
  },
  {
    id: 3,
    cateId: 2,
    label: "SAMSUNG GALAXY S21 ULTRA",
  },
  {
    id: 4,
    cateId: 2,
    label: "SAMSUNG GALAXY NOTE 21",
  },
  {
    id: 5,
    cateId: 3,
    label: "IPHONE X",
  },
  {
    id: 6,
    cateId: 3,
    label: "IPHONE 11",
  },
  {
    id: 7,
    cateId: 3,
    label: "IPHONE 12",
  },
  {
    id: 8,
    cateId: 4,
    label: "XIAOMI REDMI NOTE 7",
  },
  {
    id: 9,
    cateId: 4,
    label: "XIAOMI REDMI NOTE 11",
  },
  {
    id: 10,
    cateId: 4,
    label: "XIAOMI MI 11",
  },
];

export default function InputSelectSmartphone(props) {
  // State
  const [currency, setCurrency] = useState("1");
  // Props
  const { form, name, label, typeSelect, getLabel, onChange } = props;
  // Validate
  const { errors } = form;
  const hasError = errors?.[name];
  
  // Variable
  const reList = currencies.filter((item) => {
    return item.cateId == typeSelect;
  });

  const newList = [
    { 
      id: 1, 
      label: "--Choose Smartphone--"
    },
    ...reList,
  ];
  // Handle event
  const handleInput = (event) => {
    let selectedLabel = newList.find((item) => {
      return item.id == event.target.value;
    });
    // console.log(selectedLabel);
    // setCurrency(selectedLabel.id);
    getLabel(selectedLabel)

    if (onChange) {
      onChange(event.target.value)
    }
  };
  // Render
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
        value={currency}
        onChange={handleChange}
        fullWidth
        error={!!hasError}
        helperText={errors[name]?.message}
      >
        {newList.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </Controller> */}
      <Controller
        control={form.control}
        name={name}
        as={TextField}
        // disabled={}
        id="standard-select-currency-native"
        select
        label={label}
        // value={currency}
        SelectProps={{
          native: true,
        }}
        fullWidth
        onInput={handleInput}
        error={!!hasError}
        helperText={errors[name]?.message}
        disabled={(typeSelect==1)}
        
      >
        {newList.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </Controller>
    </Box>
    // <Box>
    //   <TextField defaultValue="Ngoc Vinh" onClick={handle22}></TextField>
    // </Box>
  );
}
