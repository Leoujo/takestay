import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormDialog } from "../FormDialog";
import { useMutation } from "react-query";
import { deleteCategory } from "../../../api/services/coffeeshops";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// const options = [
//   "None",
//   "Atria",
//   "Callisto",
//   "Dione",
//   "Ganymede",
//   "Hangouts Call",
//   "Luna",
//   "Oberon",
//   "Phobos",
//   "Pyxis",
//   "Sedna",
//   "Titania",
//   "Triton",
//   "Umbriel",
// ];

const ITEM_HEIGHT = 48;

interface Props {
  refetch: () => void;
  categoryId: number | undefined;
}

export const MenuList: React.FC<Props> = ({ refetch, categoryId }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { mutate } = useMutation(() => deleteCategory(categoryId), {
    onSuccess: () => refetch(),
    onError: (err) => console.log(err),
  });

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const deleteCategoryHandler = (e: any) => {
    mutate();
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ padding: 0 }}
      >
        <MoreVertIcon sx={{ color: "secondary.main" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem>
          <Button startIcon={<DeleteIcon />} onClick={(e) => deleteCategoryHandler(e)}>
            Delete Category
          </Button>
        </MenuItem>
        <MenuItem>
          <FormDialog type="item" refetch={refetch} categoryId={categoryId} />
        </MenuItem>
      </Menu>
    </>
  );
};
