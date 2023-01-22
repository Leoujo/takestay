import { Container, Typography } from "@mui/material";
import { CategoryCard } from "./CategoryCard";

export const Menu = () => {
  return (
    <Container sx={{ m: "20px 0" }}>
      <Typography color="primary" variant="h5">
        Menu
      </Typography>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </Container>
  );
};
