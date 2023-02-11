import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation } from "react-query";
import { createCategory, createCoffeeShop, createItem } from "../../../api/services/coffeeshops";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { LinearProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Item } from "../../models";

interface Props {
  type: "coffeeShop" | "category" | "item";
  categoryId?: number;
  refetch: () => void;
}

export const FormDialog: React.FC<Props> = ({ type, refetch, categoryId }) => {
  const [open, setOpen] = React.useState(type === "coffeeShop");
  const [coffeeShopName, setCoffeeShopName] = React.useState("");
  const [categoryName, setCategoryName] = React.useState("");
  const [itemObject, setItemObject] = React.useState<Item>({ name: "", description: "", price: 0 });

  const dispatch = useDispatch<AppDispatch>();

  const { id: ownerId } = useSelector((state: RootState) => state.user);

  const { mutate: mutateCoffeeShop, isLoading: loadingCoffeeShop } = useMutation(() => createCoffeeShop(coffeeShopName, ownerId), {
    onSuccess: () => refetch(),
  });

  const { mutate: mutateCategory, isLoading: loadingCategory } = useMutation(() => createCategory(categoryName, ownerId), {
    onSuccess: () => refetch(),
  });

  const { mutate: mutateItem, isLoading: loadingItem } = useMutation(() => createItem(categoryId, itemObject), {
    onSuccess: () => refetch(),
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
    } else if (type === "item") {
      mutateItem();
    }
  };

  // Fix: Use react hook form and yup resolver
  return (
    <>
      <Button startIcon={<AddIcon />} variant="outlined" onClick={handleClickOpen}>
        New {type}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle> Creating {type}</DialogTitle>
        <DialogContent>
          {type === "coffeeShop" && (
            <TextField onChange={(e) => setCoffeeShopName(e.target.value)} label="Name" margin="dense" variant="outlined" autoFocus fullWidth />
          )}
          {type === "category" && (
            <TextField onChange={(e) => setCategoryName(e.target.value)} label="Name" margin="dense" variant="outlined" autoFocus fullWidth />
          )}
          {type === "item" && (
            <>
              <TextField
                onChange={(e) => setItemObject({ ...itemObject, name: e.target.value })}
                label="Name"
                margin="dense"
                variant="outlined"
                fullWidth
              />
              <TextField
                onChange={(e) => setItemObject({ ...itemObject, description: e.target.value })}
                label="Description"
                margin="dense"
                variant="outlined"
                fullWidth
              />
              <TextField
                onChange={(e) => setItemObject({ ...itemObject, price: parseInt(e.target.value) })}
                label="Price"
                margin="dense"
                variant="outlined"
                fullWidth
              />
            </>
          )}
        </DialogContent>
        {loadingCoffeeShop || loadingCategory || loadingItem ? (
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
