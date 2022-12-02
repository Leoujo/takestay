import { TextField } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  register: any;
  errors: any;
}

export const AuthTextField: React.FC<Props> = ({ register, errors, label }) => {
  return (
    <TextField
      margin="dense"
      label={label}
      variant="filled"
      {...register(label.toLocaleLowerCase())}
      error={!!errors}
      helperText={errors?.message}
      fullWidth
    />
  );
};
