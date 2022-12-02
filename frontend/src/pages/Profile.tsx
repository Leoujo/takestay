import { CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar } from "../components/Navbar";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCoffeeshop } from "../redux/slices/coffeeshopSlice";
import { AppDispatch, RootState } from "../redux/store";
import { Container as StyledContainer } from "../style/global";
import { SectionCard } from "../components/SectionCard";
import { CreationDialog } from "../components/Dialog/CreationDialog";
import { ProfileCard } from "../components/ProfileCard";

export const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, coffeeshopData } = useSelector((state: RootState) => state.coffeeshop);

  useEffect(() => {
    getUserDataHandler();
  }, []);

  const getUserDataHandler = () => {
    const userIdString = localStorage.getItem("userId") || "";
    const userId = JSON.parse(userIdString);
    dispatch(getUserCoffeeshop(userId));
  };

  return (
    <Box>
      <Navbar />
      {coffeeshopData ? (
        <Container sx={{ marginTop: "20px" }}>
          <ProfileCard coffeeshopName={coffeeshopData?.name} />
          {isLoading && (
            <StyledContainer padding="50px 0px">
              <CircularProgress />
            </StyledContainer>
          )}
          {coffeeshopData === null && !isLoading && <CreationDialog type="coffeeshop" />}
          {coffeeshopData && !isLoading && <SectionCard coffeeshopData={coffeeshopData} getUserDataHandler={getUserDataHandler} />}
        </Container>
      ) : (
        <StyledContainer>
          <CreationDialog type="coffeeshop" getUserDataHandler={getUserDataHandler} />
        </StyledContainer>
      )}
    </Box>
  );
};
