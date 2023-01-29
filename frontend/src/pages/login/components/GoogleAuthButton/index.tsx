import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { loginUser } from "../../../../store/slices/userSlice";
import { Cookies } from "react-cookie";
import { loginOrCreateOwner } from "../../../../api/services/owners";
import { useMutation } from "react-query";

export const GoogleAuthButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const clientId = "462298908679-1ibtb17o03qgjr5scbdm9ul963oj4nfr.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({ clientId: clientId, scope: "" });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const { mutateAsync, data: mutateData, isLoading, isSuccess, isError } = useMutation((res: any) => loginOrCreateOwner(res));

  if (isSuccess) {
    // should store token id on cookies
    const { data } = mutateData;
    dispatch(loginUser(data));
  }

  const onFailure = (err: any) => {
    console.log("failed to connect on google");
  };

  return (
    <Box margin="20px 0">
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={(res) => mutateAsync(res)}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </Box>
  );
};
