import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ColumnContainer, Image, RowContainer } from "../../../../../../common/styles";
import CoffeeSample from "../../../../../../assets/images/coffee-sample.png";
import { Item } from "../../../../../../common/models";

interface Props {
  item: Item;
}

export const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <Box borderTop="1px solid #F3F3F3" padding="10px">
      <RowContainer align="flex-start" justify="space-between">
        <RowContainer justify="flex-start">
          <Image src={CoffeeSample} width="60px" />
          <ColumnContainer align="flex-start" margin="0 10px">
            <Typography gutterBottom variant="body1" component="div">
              {item.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="caption" color="green">
              ${item.price}
            </Typography>
          </ColumnContainer>
        </RowContainer>
        {/* <HighlightOffRoundedIcon color="primary" /> */}
      </RowContainer>
    </Box>
  );
};
