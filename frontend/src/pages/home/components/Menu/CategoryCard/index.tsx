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

export const CategoryCard = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <RowContainer justify="flex-start">
          <Typography variant="h6">Coffees</Typography>
          <HighlightOffRoundedIcon color="secondary" sx={{ m: "0 10px" }} />
        </RowContainer>
      </AccordionSummary>
      <AccordionDetails sx={{ p: "10px 0" }}>
        <ItemCard />
        <ItemCard />

        <Box margin="0 20px">
          <Button color="primary" startIcon={<AddIcon />} variant="outlined" fullWidth>
            Add Item
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
