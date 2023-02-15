import { Container } from "@mui/system";
import QRCode from "react-qr-code";
import { Navbar } from "../../common/components/Navbar";
import { ColumnContainer, Image } from "../../common/styles";
// import QRCode from "../../assets/images/qrcode-sample.png";

export const QrCode = () => {
  let url = `${process.env.REACT_APP_BASE_URL}/test}`;
  return (
    <>
      <Navbar />
      <Container>
        <ColumnContainer margin="20px 0">
          {/* <Image src={QRCode} width="300px" /> */}
          <QRCode value={url} />
        </ColumnContainer>
      </Container>
    </>
  );
};
