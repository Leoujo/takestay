import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CategoryItem } from "../../../interfaces/coffeeshopState";

interface ItemCardProps {
  item: CategoryItem;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <Paper>
      <Box height="90px" margin="10px" padding="10px 0px">
        <Box display="flex">
          <Box component="img" src="/assets/images/item-profile.jpg" width="90px" marginRight="15px" />
          <Box display="flex" flexDirection="column" justifyContent="space-between">
            <Box>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" fontWeight="300">
                {item.description}
              </Typography>
            </Box>

            <Typography variant="body2" color="#889B73">
              R$ 5,50
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
