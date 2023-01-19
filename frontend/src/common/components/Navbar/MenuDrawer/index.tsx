import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, withStyles } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import Logo from "../../../../assets/brand/logo.png";
import { Background, Container } from "../../../styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

export const MenuDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <MenuIcon onClick={handleDrawerToggle} />
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <Background>
          <Container alignTop>
            <Box component="img" src={Logo} />
          </Container>
          <List sx={{ color: "white" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <RemoveRedEyeIcon />
                </ListItemIcon>
                <ListItemText primary="View Menu" />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Menu" />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
          </List>
        </Background>
      </Drawer>
    </>
  );
};
