import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ItemCard } from "./ItemCard";

import { RowContainer } from "../../../../../common/styles";
import { Box } from "@mui/system";
import { Category } from "../../../../../common/models";
import { FormDialog } from "../../../../../common/components/FormDialog";
import { MenuList } from "../../../../../common/components/MenuList";
import { useState } from "react";

interface Props {
  category: Category;
  refetch: () => void;
}

export const CategoryCard: React.FC<Props> = ({ category, refetch }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion expanded={expanded}>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <RowContainer justify="space-between">
          <RowContainer justify="flex-start" onClick={handleChange}>
            <Typography variant="h6">{category.name}</Typography>
            <ExpandMoreIcon color="primary" />
          </RowContainer>

          <MenuList refetch={refetch} categoryId={category.id} />
        </RowContainer>
      </AccordionSummary>
      <AccordionDetails sx={{ p: "10px 0" }}>
        {category.items.map((item, key) => (
          <ItemCard item={item} key={key} />
        ))}

        <Box margin="0 20px" textAlign="center"></Box>
      </AccordionDetails>
    </Accordion>
  );
};
