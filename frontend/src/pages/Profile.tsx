import { CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar } from "../components/Navbar";
import { Container as StyledContainer } from "../style/global";
import { CreationDialog } from "../components/Dialog/CreationDialog";
import { ProfileCard } from "../components/ProfileCard";
import coffeeshopService from "../services/coffeeshopService";
import { useEffect, useState } from "react";
import { Coffeeshop } from "../interfaces/coffeeshopState";

export const Profile = () => {
  const [coffeeshop, setCoffeeshop] = useState<Coffeeshop>();

  useEffect(() => {
    coffeeshopService.getOne(3).then((res) => {
      setCoffeeshop(res);
    });
  }, []);


  return (
    <Box>
      <Navbar />
      {coffeeshop ? (
        <Container sx={{ marginTop: "20px" }}>
          <ProfileCard coffeeshopName={coffeeshop.name} />
          {/* {isLoading && (
            <StyledContainer padding="50px 0px">
              <CircularProgress />
            </StyledContainer>
          )} */}
          {coffeeshop === null && <CreationDialog type="coffeeshop" />}
          {/* {coffeeshop && !isLoading && <SectionCard coffeeshop={coffeeshop} getUserDataHandler={getUserDataHandler} />} */}
        </Container>
      ) : (
        <StyledContainer>{/* <CreationDialog type="coffeeshop" getUserDataHandler={getUserDataHandler} /> */}</StyledContainer>
      )}
    </Box>
  );
};
