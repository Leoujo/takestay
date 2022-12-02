import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { createUserCoffeeshop, createUserCoffeeshopCategory, createUserCoffeeshopCategoryItem } from "../../../redux/slices/coffeeshopSlice";
import { CircularProgress } from "@mui/material";

interface Form {
  file: any;
  name: string;
  description: string;
}

interface Props {
  type: "coffeeshop" | "category" | "item";
  getUserDataHandler?: () => void;
  categoryId?: string;
}

export const CreationDialog: React.FC<Props> = ({ type, getUserDataHandler, categoryId }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, coffeeshopData } = useSelector((state: RootState) => state.coffeeshop);

  const { register, handleSubmit } = useForm<Form>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const imageHandler = (e: React.ChangeEvent<any>) => {
  //   const files = e.target.files;
  //   setValue("file", files[0]);
  // };

  const onSubmit = (data: Form) => {
    if (type === "coffeeshop") {
      dispatch(createUserCoffeeshop(data)).then(() => {
        handleClose();
        getUserDataHandler?.();
      });
    } else if (type === "category") {
      let categoryData = {
        name: data.name,
        coffeeshopId: coffeeshopData?.id,
      };
      dispatch(createUserCoffeeshopCategory(categoryData)).then(() => {
        handleClose();
        getUserDataHandler?.();
      });
    } else if (type === "item") {
      let categoryData = {
        name: data.name,
        description: data.description,
        coffeeshopId: coffeeshopData?.id,
        categoryId: categoryId,
      };
      dispatch(createUserCoffeeshopCategoryItem(categoryData)).then(() => {
        handleClose();
        getUserDataHandler?.();
      });
    }
  };

  const typehandler = () => {
    switch (type) {
      case "coffeeshop":
        return (
          <>
            {/* <InputFileImage handleChange={(e) => imageHandler(e)} file={watch("file")} /> */}
            <TextField autoFocus margin="dense" label="Nome" {...register("name")} fullWidth />
          </>
        );
      case "category":
        return <TextField autoFocus margin="dense" label="Nome" {...register("name")} fullWidth />;

      default:
        return (
          <>
            {/* <InputFileImage handleChange={(e) => imageHandler(e)} file={watch("file")} /> */}
            <TextField autoFocus margin="dense" label="Nome" {...register("name")} fullWidth />
            <TextField autoFocus margin="dense" label="Descrição" {...register("description")} fullWidth />
          </>
        );
    }
  };

  return (
    <>
      <Button color="primary" onClick={handleClickOpen} variant="outlined" fullWidth>
        {`+ new ${type}`}
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle> {`Creating ${type}`}</DialogTitle>
          <DialogContent>{typehandler()}</DialogContent>

          <DialogActions>
            <Button variant="contained" fullWidth type="submit">
              {isLoading ? <CircularProgress sx={{ color: "white" }} /> : "Criar"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};
