import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CREATEACCOUNT, CREATEACCOUNTTITLE, LOGINACCOUNT, LOGINACCOUNTTITLE } from "../../../constants";
import { AccountToggleFooter } from "../../AccountToggleFooter";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { createUser, loginUser } from "../../../redux/slices/userSlice";
import { Alert, CircularProgress } from "@mui/material";
import { AuthTextField } from "./AuthTextField";
import { schema } from "./schema";
import { FormAuthData } from "../../../interfaces/Auth";

const displayModalTitle = (type: string) => {
  switch (type) {
    case CREATEACCOUNT:
      return CREATEACCOUNTTITLE;
    case LOGINACCOUNT:
      return LOGINACCOUNTTITLE;
  }
};

const displayModalButton = (type: string) => {
  switch (type) {
    case CREATEACCOUNT:
      return "Create";
    case LOGINACCOUNT:
      return "Enter";
  }
};

export const AuthDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState<string>(CREATEACCOUNT);
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, isError, isSuccess, errorMessage } = useSelector((state: RootState) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAuthData>({
    resolver: yupResolver(schema(type)),
  });

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
      if (open) handleClick();
    }
  }, [isSuccess]);

  // if is closing modal, go back to initial state.
  const handleClick = () => {
    if (open) {
      setType(CREATEACCOUNT);
    }
    setOpen(!open);
  };

  const handleType = (newType: string) => {
    setType(newType);
    handleClick();
  };

  const onSubmit = (data: FormAuthData) => {
    switch (type) {
      case CREATEACCOUNT:
        return dispatch(createUser(data));
      case LOGINACCOUNT:
        return dispatch(loginUser(data));
    }
  };

  return (
    <Box width="100%">
      <Button variant="contained" style={{ backgroundColor: "white", color: "#263A5F" }} onClick={handleClick} fullWidth>
        Create
      </Button>
      <AccountToggleFooter textColor="white" calledInType={CREATEACCOUNT} onClick={handleType} />
      <Dialog open={open} onClose={handleClick} fullWidth>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <DialogTitle color="primary"> {displayModalTitle(type)}</DialogTitle>
          <CloseIcon color="primary" style={{ marginRight: "25px" }} onClick={handleClick} />
        </Box>

        <DialogContent>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            {type === CREATEACCOUNT && (
              <>
                <AuthTextField label="Name" register={register} errors={errors.name} />
                <AuthTextField label="Surname" register={register} errors={errors.surname} />
              </>
            )}
            <AuthTextField label="Email" register={register} errors={errors.email} />
            <AuthTextField label="Password" register={register} errors={errors.password} />

            {type === CREATEACCOUNT && <AuthTextField label="ConfirmPassword" register={register} errors={errors.confirmpassword} />}
            <Box marginTop="10px">{isError && <Alert severity="error">{String(errorMessage)}</Alert>}</Box>

            <Box margin="30px 0px 0px 0px">
              <Button variant="contained" fullWidth type="submit">
                {isLoading ? <CircularProgress color="secondary" /> : displayModalButton(type)}
              </Button>
            </Box>
          </Box>
          <AccountToggleFooter calledInType={type} onClick={handleType} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};
