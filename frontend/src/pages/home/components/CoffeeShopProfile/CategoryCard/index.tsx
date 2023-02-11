import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ItemCard } from "./ItemCard";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RowContainer } from "../../../../../common/styles";
import { Box } from "@mui/system";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Category } from "../../../../../common/models";

interface Props {
  category: Category;
}
export const CategoryCard: React.FC<Props> = ({ category }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} aria-controls="panel1a-content" id="panel1a-header">
        <RowContainer justify="flex-start">
          <Typography variant="h6" flexGrow={1}>
            {category.name}
          </Typography>
          <HighlightOffRoundedIcon color="secondary" sx={{ m: "0 10px" }} />
        </RowContainer>
      </AccordionSummary>
      <AccordionDetails sx={{ p: "10px 0" }}>
        {category.items.map((item) => (
          <ItemCard item={item} />
        ))}

        <Box margin="0 20px">
          <Button color="primary" startIcon={<AddIcon />} variant="outlined" fullWidth>
            Add Item
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
