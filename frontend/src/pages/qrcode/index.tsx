import { Container } from "@mui/system";
import React from "react";
import { Navbar } from "../../common/components/Navbar";
import { ColumnContainer, Image } from "../../common/styles";
import QRCode from "../../assets/images/qrcode-sample.png";

export const QrCode = () => {
  return (
    <>
      <Navbar />
      <Container>
        <ColumnContainer margin="20px 0">
          <Image src={QRCode} width="300px"/>
        </ColumnContainer>
      </Container>
    </>
  );
};
