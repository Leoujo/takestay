import { Box} from "@mui/material";
import React, { useState } from "react";
import { Categories, Coffeeshop } from "../../interfaces/coffeeshopState";
import { Container } from "../../style/global";
import { ItemCard } from "./ItemCard";
import { SelectedMenuItem } from "./SelectedMenuItem";
import { MenuTypography } from "./style";

interface ScrollableMenuProps {
  coffeeshop: Coffeeshop;
}

export const ScrollableMenu: React.FC<ScrollableMenuProps> = ({ coffeeshop }) => {
  const [selectedCategory, setSelectedCategory] = useState<Categories>(coffeeshop.categories[0]);

  const changeSelectedCategory = (category: Categories) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Container flexDirection="row" justifyContent="flex-start" margin="20px 0px" isUnderlined>
        {coffeeshop.categories.map((category, key) => (
          <Box key={key}>
            {category._id === selectedCategory._id ? (
              <SelectedMenuItem text={category.name} />
            ) : (
              <MenuTypography onClick={() => changeSelectedCategory(category)}>{category.name}</MenuTypography>
            )}
          </Box>
        ))}
      </Container>
      <Box margin="20px">
        {selectedCategory.items.map((item, key) => (
          <ItemCard item={item} key={key}/>
        ))}
      </Box>
    </div>
  );
};
