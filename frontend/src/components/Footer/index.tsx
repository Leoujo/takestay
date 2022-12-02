import { Box } from "@mui/system";
import { Container, Section } from "./style";
import Logo from "../../assets/take-stay-white-logo.png";
import Gmail from "../../assets/gmail-round-logo.png";
import { Divider, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Container>
      <Box bgcolor="primary.main">
        <Section>
          <Box component="img" width={120} src={Logo} />
          <Box component="img" width="4em" height="3em" src={Gmail} />
        </Section>
        <Divider style={{ color: "white" }} />
        <Section isCentered>
          <Typography variant="caption" color="secondary">
            Isto é apenas uma aplicação de teste.
          </Typography>
        </Section>

        {/* <Typography>Teste</Typography> */}
      </Box>
    </Container>
  );
};
