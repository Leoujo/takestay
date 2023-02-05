import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ColumnContainer, Image, RowContainer } from "../../../../../../common/styles";
import CoffeeSample from "../../../../../../assets/images/coffee-sample.png";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

export const ItemCard = () => {
  return (
    <Box borderTop="1px solid #F3F3F3" padding="10px">
      <RowContainer align="flex-start" justify="space-between">
        <Image src={CoffeeSample} width="60px" />
        <ColumnContainer align="flex-start">
          <Typography gutterBottom variant="body1" component="div">
            House's expresso
          </Typography>
          <Typography variant="caption" color="text.secondary">
            The good and old expresso coffee.
          </Typography>
          <Typography variant="caption" color="green">
            $ 2.00
          </Typography>
        </ColumnContainer>
        <HighlightOffRoundedIcon color="primary" />
      </RowContainer>
    </Box>
  );
};
