import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ProfileIcon from "../../../../assets/images/profile.png";
import { Image, RowContainer } from "../../../../common/styles";
import { CategoryCard } from "./CategoryCard";
import { CoffeeShop } from "../../../../common/models";
import { FormDialog } from "../../../../common/components/FormDialog";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch, useSelector } from "react-redux";
import { setViewOnlyToggle } from "../../../../store/slices/coffeeShopSlice";
import { RootState } from "../../../../store/store";

interface Props {
  coffeeShop: CoffeeShop;
  refetch: () => void;
  isPublic?: boolean;
}

export const CoffeeShopProfile: React.FC<Props> = ({ coffeeShop, refetch, isPublic }) => {
  const dispatch = useDispatch();

  const { isEditable } = useSelector((state: RootState) => state.coffeeShop);

  const visibilityHandler = () => {
    dispatch(setViewOnlyToggle());
  };

  return (
    <>
      <RowContainer padding="10px 0">
        <RowContainer justify="flex-start">
          <Image src={ProfileIcon} />
          <Box>
            <Typography color="primary" variant="h5">
              {coffeeShop.name}
            </Typography>
            {/* <Typography variant="body2" color="grey">
              By {ownerName}
            </Typography> */}
          </Box>
        </RowContainer>
        {isEditable ? (
          <VisibilityIcon color="primary" onClick={visibilityHandler} />
        ) : (
          <VisibilityOffIcon color="primary" onClick={visibilityHandler} />
        )}
      </RowContainer>

      <Divider />
      <Container sx={{ m: "20px 0" }}>
        <RowContainer justify="space-between">
          <Typography color="primary" variant="h6">
            Menu
          </Typography>
          {isEditable && <FormDialog type="category" refetch={refetch} />}
        </RowContainer>
      </Container>
      {coffeeShop.categories?.map((category, key) => (
        <CategoryCard isEditable={isEditable} category={category} refetch={refetch} key={key} />
      ))}
    </>
  );
};
