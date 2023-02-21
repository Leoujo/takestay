import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

interface SnackbarsProps {
  isError: boolean;
}

export const Snackbars: React.FC<SnackbarsProps> = ({ isError }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  if (isError) {
    handleOpen();
  }
  return (
    <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={open} onClose={handleOpen} message="I love snacks">
      <Alert severity="error">Error! Please, try again.</Alert>
    </Snackbar>
  );
};
