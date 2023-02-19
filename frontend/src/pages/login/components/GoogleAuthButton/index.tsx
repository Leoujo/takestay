import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { loginOwner } from "../../../../store/slices/userSlice";
import { loginOrCreateOwner } from "../../../../api/services/owners";
import { useMutation, useQuery } from "react-query";
import { LinearProgress } from "@mui/material";
import { Snackbars } from "../../../../common/components/Snackbar";
import { GoogleLogin } from "@react-oauth/google";
import { axiosClient } from "../../../../api/axios";
import { googleLogin } from "../../../../api/services/googleApi";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export const GoogleAuthButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { mutateAsync, isLoading, isError } = useMutation((res: any) => loginOrCreateOwner(res), {
    onSuccess: (data) => onSuccessLogin(data),
  });

  const onSuccessLogin = (data: any) => {
    dispatch(loginOwner(data));
    navigate("/menu");
  };

  const onSuccessGoogleLogin = (data: any) => {
    const decodedCredential = jwtDecode(data.credential);
    mutateAsync(decodedCredential);
  };

  const onFailureGoogleLogin = () => {
    console.log("failed to connect on google");
  };

  if (isLoading) {
    return (
      <Box width="50%">
        <LinearProgress color="secondary" />
      </Box>
    );
  }

  return (
    <>
      <Snackbars isError={isError} />
      <Box margin="20px 0">
        <GoogleLogin onSuccess={onSuccessGoogleLogin} onError={onFailureGoogleLogin} />
      </Box>
    </>
  );
};
