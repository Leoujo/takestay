import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ItemCard } from "./ItemCard";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const CategoryCard = () => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography variant="h6">Coffees</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: "10px 0" }}>
        <ItemCard />
        <ItemCard />
        <Button startIcon={<AddIcon />} variant="outlined" fullWidth>
          Add Item
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};
