import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "../../common/styles";
import Logo from "../../assets/brand/logo-round.png";
import { Background } from "./styles";
import messages from "../../messages";

export const Login = () => {
  return (
    <Background>
      <Container justifyContent="space-between">
        <Box component="img" src={Logo} />
        <Box>
          <Typography variant="h3" textAlign="center" color="white">
            {messages.brand}
          </Typography>
          <Typography variant="h5" textAlign="center" color="white">
            {messages.welcome}
          </Typography>
        </Box>
      </Container>
    </Background>
  );
};
