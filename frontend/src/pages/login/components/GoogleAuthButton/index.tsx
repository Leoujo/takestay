import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { Box } from "@mui/system";
export const GoogleAuthButton = () => {
  const clientId = "462298908679-1ibtb17o03qgjr5scbdm9ul963oj4nfr.apps.googleusercontent.com";
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({ clientId: clientId, scope: "" });
    };
    gapi.load("client:auth2", initClient);
  });
  const onSuccess = (res: any) => {
    console.log("success:", res);
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
        isSignedIn={true}
      />
    </Box>
  );
};
