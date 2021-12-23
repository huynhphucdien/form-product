import React from "react";
import { useState, useEffect } from "react";
import ListProduct from "./ListProduct";
import ManageProduct from "./ManageProduct";
import CustomizedDialogs from "../main-form/mainForm";
import "../../App.css";

export default function MainPage() {
  const [formValues, setFormValues] = useState();
  const [labelType, setLabelType] = useState();
  const [labelChoose, setLabelChoose] = useState();
  const [avarta, setAvarta] = useState();

  const handleChangeFormValues = (values) => {
    setFormValues(values);
    // console.log(values);
  };

  const handleSelect = (selectedLabel) => {
    setLabelType(selectedLabel);
  };
  const handleChoose = (selectedLabel) => {
    setLabelChoose(selectedLabel);
  };
  const handleAvarta = (file) => {
    console.log(file);
    file.preview = URL.createObjectURL(file);
    setAvarta(file);
  };

  useEffect(() => {
    return ()=> {
      if (avarta){
        URL.revokeObjectURL(avarta.preview)
      }
    }
  }, [avarta])

  return (
    <>
      <div className="manage-page">
        <ManageProduct />
        <ListProduct />
      </div>
      <div>
        <div>
          {avarta && <img src={avarta.preview} alt="" width="50%" />}
          <div>
            <h2>{formValues?.productName}</h2>
            <p>{labelType?.label}</p>
            <p>{labelChoose?.label}</p>
            <p>{formValues?.productCost}</p>
            <p>{formValues?.productDescription}</p>
          </div>
        </div>
        <CustomizedDialogs
          onChanges={handleChangeFormValues}
          labelSelect={handleSelect}
          labelChoose={handleChoose}
          getAvarta={handleAvarta}
        />
        
      </div>
    </>
  );
}
