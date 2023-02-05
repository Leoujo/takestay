import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ProfileIcon from "../../../../assets/images/profile.png";
import { Image, RowContainer } from "../../../../common/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CategoryCard } from "./CategoryCard";
import { CoffeeShop } from "../../../../common/models";

interface Props {
  coffeeShop: CoffeeShop;
}

export const CoffeeShopProfile: React.FC<Props> = ({ coffeeShop }) => {
  return (
    <>
      <Container>
        <RowContainer padding="10px 0">
          <RowContainer justify="flex-start">
            <Image src={ProfileIcon} />
            <Box>
              <Typography color="primary">{coffeeShop.name}</Typography>
              <Typography variant="body2" color="grey">
                By: Leozin
              </Typography>
            </Box>
          </RowContainer>
          <VisibilityIcon color="primary" />
        </RowContainer>
      </Container>
      <Divider />
      <Container sx={{ m: "20px 0" }}>
        <Typography color="primary" variant="h5">
          Menu
        </Typography>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Container>
    </>
  );
};
