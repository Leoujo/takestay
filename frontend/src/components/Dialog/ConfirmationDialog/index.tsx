import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteUserCoffeeshoCategory } from "../../../redux/slices/coffeeshopSlice";
import { AppDispatch } from "../../../redux/store";

interface ConfirmationDialogProps {
  coffeeshopId: string | undefined;
  categoryId: string | undefined;
  getUserDataHandler: () => void;
}

export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ coffeeshopId, categoryId, getUserDataHandler }) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryDelete = () => {
    let data = {
      coffeeshopId,
      categoryId,
    };
    dispatch(deleteUserCoffeeshoCategory(data)).then(() => {
      getUserDataHandler();
      handleClose();
    });
  };

  return (
    <div>
      <DeleteIcon color="primary" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Delete Category"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Are you sure you wanna delete this category?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Go back</Button>
          <Button onClick={handleCategoryDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
