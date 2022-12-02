import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Coffeeshop } from "../../interfaces/coffeeshopState";
import { Container } from "../../style/global";
import { CreationDialog } from "../Dialog/CreationDialog";
import { ItemCard } from "./ItemCard";
import {ConfirmationDialog} from "../Dialog/ConfirmationDialog";

interface Props {
  coffeeshopData: Coffeeshop;
  getUserDataHandler: () => void;
}

export const SectionCard: React.FC<Props> = ({ coffeeshopData, getUserDataHandler }) => {
  return (
    <Box marginTop="20px">
      <Box>
        <CreationDialog type="category" getUserDataHandler={getUserDataHandler} />
      </Box>

      {coffeeshopData.categories.map((category, key) => (
        <Paper key={key} elevation={3}>
          <Box marginTop="20px">
            <Box padding="20px 10px 0px 10px" display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6" color="black" fontWeight="bold" sx={{ lineHeight: "20px" }}>
                {category.name}
              </Typography>
              <ConfirmationDialog coffeeshopId={coffeeshopData.id} categoryId={category._id} getUserDataHandler={getUserDataHandler}/>

            </Box>
            <Box marginTop="20px" padding="0px 10px">
              <Container flexDirection="column">
                {category.items.length > 0 ? (
                  category.items.map((item, key) => <ItemCard item={item} key={key} />)
                ) : (
                  <Typography variant="body2">No items yet</Typography>
                )}
              </Container>
            </Box>
            <Box marginTop="10px" padding="15px">
              <CreationDialog type="item" getUserDataHandler={getUserDataHandler} categoryId={category._id} />
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};
