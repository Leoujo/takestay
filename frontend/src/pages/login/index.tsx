import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "../../common/styles";
import Logo from "../../assets/brand/logo-round.png";
import { Background, SplashText } from "./styles";
import messages from "../../messages";
import { GoogleAuthButton } from "./components/GoogleAuthButton";

export const Login = () => {
  return (
    <Background>
      <Container>
        <Box component="img" src={Logo} />
        <Box>
          <SplashText variant="h2">{messages.brand}</SplashText>
          <SplashText variant="h5">{messages.welcome}</SplashText>
        </Box>
        <GoogleAuthButton />
      </Container>
    </Background>
  );
};
