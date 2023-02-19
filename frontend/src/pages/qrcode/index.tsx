import { Container } from "@mui/system";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { Navbar } from "../../common/components/Navbar";
import { ColumnContainer, Image } from "../../common/styles";
import { RootState } from "../../store/store";
import { removeSpacesAndAccents } from "../../utils";
// import QRCode from "../../assets/images/qrcode-sample.png";

export const QrCode = () => {
  const { name } = useSelector((state: RootState) => state.coffeeShop);
  let url = `${process.env.REACT_APP_BASE_URL}/${removeSpacesAndAccents(name)}`;

  return (
    <>
      <Navbar />
      <Container>
        <ColumnContainer margin="20px 0">
          <QRCode value={url} />
        </ColumnContainer>
      </Container>
    </>
  );
};
