import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InputField from "./InputField";
import InputSelect from "./InputSelect";
import InputSelectSmartphone from "./InputSelectSmartphone";
import InputFieldGia from "./InputFieldGia";
import MultilineTextFields from "./InputTextArea";
import UploadButtons from "./UploadButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    margin: "0 auto",
  },
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("1");
  // console.log(type);

  const { onChanges, labelSelect, labelChoose, getAvarta } = props;

  const schema = yup.object().shape({
    productName: yup
      .string()
      .required("Vui long nhap ten san pham")
      .min(10, "Vui long nhap tren 10 ky tu"),
    productType: yup.string().required("Vui long chon"),
    productChoosen: yup.string().required("Vui long chon"),
    productCost: yup.number().typeError('number').min(1000).required("vui long nhap so"),
    productDescription: yup.string().required("Vui long nhap"),
  });

  const form = useForm({
    mode: "all",
    defaultValue: {
      productName: "",
      productType: "1",
      productChoosen: "1",
      productCost: "",
      productDescription: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    if (onChanges) {
      onChanges(values);
    }
  };

  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // setValue giong nhu setState cho Controller, khi code chay dung nhung du lieu ko render ra ta can phai set lai value cho controller
  const {setValue} = form
  const handleId = (newId) => {
    setType(newId);

    setValue("productType", newId)
  };

  const handleTypeId = (newId) => {
    setValue("productChoosen", newId)
  };

  return (
    <div>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
        <EditIcon />
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        // disableEscapeKeyDown
        onBackdropClick
      >
        {/* <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Form Product
        </BootstrapDialogTitle> */}
        <form
          className={classes.root}
          onSubmit={form.handleSubmit(handleSubmit)}
          // selectType={labelSelect}
        >
          <InputField name="productName" label="Tên sản phẩm" form={form} />
          <InputSelect
            name="productType"
            form={form}
            onSubmit={handleId}
            getLabel={labelSelect}
          />
          <InputSelectSmartphone
            name="productChoosen"
            form={form}
            typeSelect={type}
            getLabel={labelChoose}
            onChange={handleTypeId}
          />
          <InputFieldGia
            name="productCost"
            label="Cost"
            type="number"
            form={form}
          />
          <MultilineTextFields
            name="productDescription"
            label="Description"
            form={form}
          />
          <UploadButtons sentAvarta={getAvarta}/>
          <Button onClick={handleClose} color="inherit" type="submit">
            Submit
          </Button>
        </form>
        {/* <DialogActions> */}
        {/* </DialogActions> */}
      </Dialog>
    </div>
  );
}
