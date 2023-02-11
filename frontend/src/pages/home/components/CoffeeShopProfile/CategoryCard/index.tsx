import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ItemCard } from "./ItemCard";

import { RowContainer } from "../../../../../common/styles";
import { Box } from "@mui/system";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { Category } from "../../../../../common/models";
import { FormDialog } from "../../../../../common/components/FormDialog";
import { useMutation } from "react-query";
import { deleteCategory } from "../../../../../api/services/coffeeshops";
import { LinearProgress } from "@mui/material";

interface Props {
  category: Category;
  refetch: () => void;
}
export const CategoryCard: React.FC<Props> = ({ category, refetch }) => {
  const { mutate, isLoading } = useMutation(() => deleteCategory(category.id), {
    onSuccess: () => refetch(),
    onError: (err) => console.log(err),
  });

  const deleteCategoryHandler = (e: any) => {
    e.stopPropagation();
    mutate();
  };
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />} aria-controls="panel1a-content" id="panel1a-header">
        {isLoading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="secondary" />
          </Box>
        ) : (
          <RowContainer justify="flex-start">
            <Typography variant="h6">{category.name}</Typography>
            <HighlightOffRoundedIcon color="secondary" sx={{ m: "0 10px" }} onClick={(e) => deleteCategoryHandler(e)} />
          </RowContainer>
        )}
      </AccordionSummary>
      <AccordionDetails sx={{ p: "10px 0" }}>
        {category.items.map((item, key) => (
          <ItemCard item={item} key={key} />
        ))}

        <Box margin="0 20px" textAlign="center">
          <FormDialog type="item" refetch={refetch} categoryId={category.id} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
