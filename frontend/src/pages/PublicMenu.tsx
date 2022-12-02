import { Box } from "@mui/material";
import React from "react";
import { Navbar } from "../components/Navbar";
import { ProfileCard } from "../components/ProfileCard";
import { ScrollableMenu } from "../components/ScrollableMenu";
import { Coffeeshop } from "../interfaces/coffeeshopState";

interface PublicMenuProps {
  coffeeshopData: Coffeeshop;
}

export const PublicMenu: React.FC<PublicMenuProps> = ({ coffeeshopData }) => {
  return (
    <Box>
      <Navbar isPublic />
      <ProfileCard coffeeshopName={coffeeshopData?.name} />
      <ScrollableMenu coffeeshop={coffeeshopData} />
    </Box>
  );
};
