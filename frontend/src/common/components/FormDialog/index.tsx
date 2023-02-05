import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation } from "react-query";
import { createCategory, createCoffeeShop } from "../../../api/services/coffeeshops";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { LinearProgress } from "@mui/material";
import { setUserCoffeeShop } from "../../../store/slices/userSlice";
import { CoffeeShop } from "../../models";

interface Props {
  type: "coffeeShop" | "category" | "item";
}

export const FormDialog: React.FC<Props> = ({ type }) => {
  const [open, setOpen] = React.useState(true);
  const [coffeeShopName, setCoffeeShopName] = React.useState("");
  const [categoryName, setCategoryName] = React.useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { id: ownerId } = useSelector((state: RootState) => state.user);

  const { mutate: mutateCoffeeShop, isLoading: loadingCoffeeShop } = useMutation(() => createCoffeeShop(coffeeShopName, ownerId), {
    onSuccess: (data): any => dispatch(setUserCoffeeShop(data)),
  });

  const { mutate: mutateCategory, isLoading: loadingCategory } = useMutation(() => createCategory(categoryName, ownerId), {
    onSuccess: (data): any => dispatch(setUserCoffeeShop(data)),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    if (type === "category") {
      mutateCategory();
    } else if (type === "coffeeShop") {
      mutateCoffeeShop();
    }
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        New {type}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle> Creating {type}</DialogTitle>
        <DialogContent>
          {type === "coffeeShop" && (
            <TextField onChange={(e) => setCoffeeShopName(e.target.value)} label="Name" margin="dense" variant="standard" autoFocus fullWidth />
          )}
          {type === "category" && (
            <TextField onChange={(e) => setCategoryName(e.target.value)} label="Name" margin="dense" variant="standard" autoFocus fullWidth />
          )}
          {type === "item" && (
            <TextField onChange={(e) => setCoffeeShopName(e.target.value)} label="Name" margin="dense" variant="standard" autoFocus fullWidth />
          )}
        </DialogContent>
        {loadingCoffeeShop || loadingCategory ? (
          <LinearProgress />
        ) : (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleCreate()}>Create</Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};
