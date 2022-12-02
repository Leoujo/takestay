import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "../../style/global";
import { MuiDrawer } from "../MuiDrawer";

interface NavbarProps {
  isPublic?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isPublic }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ position: "absolute" }}>{!isPublic && <MuiDrawer />}</Toolbar>
        <Container>
          <Box component="img" width={120} src="/assets/logo/main.png" alt="logo" />
        </Container>
      </AppBar>
    </Box>
  );
};
