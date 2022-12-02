import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CategoryItem } from "../../interfaces/coffeeshopState";
import { Container as StyledContainer } from "../../style/global";

interface Props {
    item:CategoryItem
}

export const ItemCard:React.FC<Props> = ({ item }) => {
  return (
    <StyledContainer width="100%" justifyContent="flex-start" bgColor="#F3F3F3" padding="10px 10px">
      <Box component="img" src="/assets/images/item-profile-white.jpg" width="50px" marginRight="20px" />
      <Box>
        <Typography variant="h6" color="black">
          {item.name}
        </Typography>
        <Typography variant="caption" color="black" fontWeight="300">
          {item.description}
        </Typography>
      </Box>
    </StyledContainer>
  );
};
