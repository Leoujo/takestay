import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ProfileIcon from "../../../../assets/images/profile.png";
import { Image, RowContainer } from "../../../../common/styles";
import { CategoryCard } from "./CategoryCard";
import { CoffeeShop } from "../../../../common/models";
import { FormDialog } from "../../../../common/components/FormDialog";

interface Props {
  coffeeShop: CoffeeShop;
  ownerName: string;
  refetch: () => void;
}

export const CoffeeShopProfile: React.FC<Props> = ({ coffeeShop, ownerName, refetch }) => {
  return (
    <>
      <RowContainer padding="10px 0">
        <RowContainer justify="flex-start">
          <Image src={ProfileIcon} />
          <Box>
            <Typography color="primary" variant="h5">
              {coffeeShop.name}
            </Typography>
            <Typography variant="body2" color="grey">
              By {ownerName}
            </Typography>
          </Box>
        </RowContainer>
      </RowContainer>

      <Divider />
      <Container sx={{ m: "20px 0" }}>
        <RowContainer justify="space-between">
          <Typography color="primary" variant="h6">
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
