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

export const GoogleAuthButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const clientId = "462298908679-1ibtb17o03qgjr5scbdm9ul963oj4nfr.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({ clientId: clientId, scope: "" });
    };
    gapi.load("client:auth2", initClient);
  }, []);
  const onSuccess = (res: any) => {
    loginOrCreateOwner(parseInt(res.googleId), res.profile);
    //  const cookies = new Cookies();
    //  cookies.set("id_token", res.tokenId);

    //  const profile = { ...res.profileObj };
    //  dispatch(loginUser(profile));
    //  navigate("/home");

    console.log("logado!");
  };
  const onFailure = (err: any) => {
    console.log("failed:", err);
  };

  return (
    <Box margin="20px 0">
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </Box>
  );
};
