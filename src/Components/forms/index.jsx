import { yupResolver } from '@hookform/resolvers/yup';
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "./input";

function Index() {
  const schema = yup.object().shape({
    title: yup
    .string()
    .required('Vui long nhap')
    .min(5), 
  });

  const form = useForm({
    mode: 'all',
    defaultValue: {
      title: "",
    },
    resolver: yupResolver(schema)
  });
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <Input name="title" label="test form" form={form} />
    </form>
  );
}

export default Index;
