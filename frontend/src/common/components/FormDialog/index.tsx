import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation } from "react-query";
import { createCoffeeShop } from "../../../api/services/coffeeshops";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { LinearProgress } from "@mui/material";
import { setUserCoffeeShop } from "../../../store/slices/userSlice";
import { CoffeeShop } from "../../models";

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const [coffeeShopName, setCoffeeShopName] = React.useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { id: ownerId } = useSelector((state: RootState) => state.user);

  const { mutate, isLoading } = useMutation(() => createCoffeeShop(coffeeShopName, ownerId), {
    onSuccess: (data): any => dispatch(setUserCoffeeShop(data)),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Coffee Shop
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle> Creating Coffee Shop</DialogTitle>
        <DialogContent>
          <TextField onChange={(e) => setCoffeeShopName(e.target.value)} label="Name" margin="dense" variant="standard" autoFocus fullWidth />
        </DialogContent>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => mutate()}>Create</Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}
