import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { User } from "../../interfaces/User";

interface ProfileCardProps {
  coffeeshopName: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ coffeeshopName }) => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    let userDataString = localStorage.getItem("userData") || "";
    let userDataJson = JSON.parse(userDataString);
    setUserData(userDataJson);
  };
  return (
    <Paper>
      <Box display="flex" padding="10px">
        <Box component="img" src="/assets/images/item-profile.jpg" width={50} height={50} />
        <Container>
          <Typography variant="h5" color="primary.main" fontWeight="bold">
            {`${coffeeshopName}`}
          </Typography>
          <Typography variant="subtitle2" color="#c8c8c8" >
            {`Created by ${userData?.name} ${userData?.surname}`}
          </Typography>
        </Container>
      </Box>
    </Paper>
  );
};
