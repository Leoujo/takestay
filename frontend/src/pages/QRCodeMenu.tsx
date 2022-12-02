import { Box } from "@mui/material";
import QRCode from "react-qr-code";
import { Navbar } from "../components/Navbar";
import { Container } from "../style/global";

export const QRCodeMenu = () => {
  let url = `http://localhost:3000/${localStorage.getItem("url")}`;
  return (
    <Box width="100%">
      <Navbar />
      <Container flexDirection="column" margin="20px">
        <Box margin="20px 0px" width="256px"></Box>
        <QRCode value={url} />
      </Container>
    </Box>
  );
};
