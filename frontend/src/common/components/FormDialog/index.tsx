import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useMutation } from "react-query";
import { createCategory, createCoffeeShop, createItem } from "../../../api/services/coffeeshops";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { LinearProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Item } from "../../models";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface Props {
  type: "coffeeShop" | "category" | "item";
  categoryId?: number;
  refetch: () => void;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number(),
});

export const FormDialog: React.FC<Props> = ({ type, refetch, categoryId }) => {
  const [open, setOpen] = React.useState(type === "coffeeShop");

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>({
    resolver: yupResolver(schema),
  });

  const { id: ownerId } = useSelector((state: RootState) => state.user);

  const { mutate: mutateCoffeeShop, isLoading: loadingCoffeeShop } = useMutation(() => createCoffeeShop(getValues("name"), ownerId), {
    onSuccess: () => refetch(),
  });

  const { mutate: mutateCategory, isLoading: loadingCategory } = useMutation(() => createCategory(getValues("name"), ownerId), {
    onSuccess: () => refetch(),
  });

  const { mutate: mutateItem, isLoading: loadingItem } = useMutation(() => createItem(getValues(), categoryId), {
    onSuccess: () => refetch(),
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    if (type === "category") mutateCategory();
    if (type === "coffeeShop") mutateCoffeeShop();
    if (type === "item") mutateItem();
  };

  // Fix: Use react hook form and yup resolver
  return (
    <>
      <Button startIcon={<AddIcon />} onClick={handleClickOpen}>
        Add {type}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle> Creating {type}</DialogTitle>
          <DialogContent>
            <TextField
              {...register("name")}
              label="Name"
              margin="dense"
              variant="outlined"
              onKeyDown={(event) => {
                event.stopPropagation();
              }}
              error={!!errors.name}
              helperText={errors.name?.message}
              fullWidth
            />
            {type === "item" && (
              <>
                <TextField
                  {...register("description")}
                  label="Description"
                  margin="dense"
                  variant="outlined"
                  onKeyDown={(event) => {
                    event.stopPropagation();
                  }}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                  fullWidth
                />
                <TextField
                  {...register("price")}
                  label="Price"
                  margin="dense"
                  variant="outlined"
                  onKeyDown={(event) => {
                    event.stopPropagation();
                  }}
                  error={!!errors.price}
                  helperText={errors.price?.message}
                  fullWidth
                  // Specific for this
                  type="number"
                />
              </>
            )}
          </DialogContent>
          {loadingCoffeeShop || loadingCategory || loadingItem ? (
            <LinearProgress />
          ) : (
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" /*onClick={() => handleCreate()}*/>Create</Button>
            </DialogActions>
          )}
        </Box>
      </Dialog>
    </>
  );
};
