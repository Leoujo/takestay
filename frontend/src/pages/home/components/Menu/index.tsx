import { Container, Typography } from "@mui/material";
import React from "react";
import { CategoryCard } from "./CategoryCard";

export const Menu = () => {
  return (
    <Container sx={{ m: "20px 0" }}>
      <Typography color="primary" variant="h5">
        Menu
      </Typography>
      <CategoryCard />
      <CategoryCard />
    </Container>
  );
};
