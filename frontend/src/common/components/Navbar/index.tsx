import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Logo from "../../../assets/brand/logo.png";
import {  RowContainer  } from "../../styles";
import { MenuDrawer } from "./MenuDrawer";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuDrawer />
          < RowContainer >
            <Box component="img" src={Logo} />
          </ RowContainer >
        </Toolbar>
      </AppBar>
    </Box>
  );
};
