import { Button, Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ProfileIcon from "../../../../assets/images/profile.png";
import { Image, RowContainer } from "../../../../common/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CategoryCard } from "./CategoryCard";
import { CoffeeShop } from "../../../../common/models";
import { useQuery } from "react-query";
import { FormDialog } from "../../../../common/components/FormDialog";

interface Props {
  coffeeShop: CoffeeShop;
  ownerName: string;
  refetch: () => void;
}

export const CoffeeShopProfile: React.FC<Props> = ({ coffeeShop, ownerName, refetch }) => {
  return (
    <>
      <Container>
        <RowContainer padding="10px 0">
          <RowContainer justify="flex-start">
            <Image src={ProfileIcon} />
            <Box>
              <Typography color="primary">{coffeeShop.name}</Typography>
              <Typography variant="body2" color="grey">
                By: {ownerName}
              </Typography>
            </Box>
          </RowContainer>
          <VisibilityIcon color="primary" />
        </RowContainer>
      </Container>
      <Divider />
      <Container sx={{ m: "20px 0" }}>
        <RowContainer justify="space-between">
          <Typography color="primary" variant="h5">
            Menu
          </Typography>
          <FormDialog type="category" refetch={refetch} />
        </RowContainer>
      </Container>
      {coffeeShop.categories?.map((category, key) => (
        <CategoryCard category={category} refetch={refetch} key={key} />
      ))}
    </>
  );
};
