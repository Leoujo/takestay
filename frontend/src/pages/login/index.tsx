import { Box } from "@mui/system";
import { Background, ColumnContainer, Image } from "../../common/styles";
import Logo from "../../assets/brand/logo-round.png";
import { SplashText } from "./styles";
import messages from "../../messages";
import { GoogleAuthButton } from "./components/GoogleAuthButton";

export const Login = () => {
  return (
    <Background>
      <ColumnContainer paddingTop="30px">
        <Image src={Logo} width="200px" />
        <Box>
          <SplashText variant="h2">{messages.brand}</SplashText>
          <SplashText variant="h5">{messages.welcome}</SplashText>
        </Box>
        <GoogleAuthButton />
      </ColumnContainer>
    </Background>
  );
};
