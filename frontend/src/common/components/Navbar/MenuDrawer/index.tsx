import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, withStyles } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import Logo from "../../../../assets/brand/logo.png";
import { Background, ColumnContainer } from "../../../styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LogoutIcon from "@mui/icons-material/Logout";
import QrCodeIcon from "@mui/icons-material/QrCode";
import MenuBookIcon from "@mui/icons-material/MenuBook";

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
          <ColumnContainer justify="flex-start">
            <Box component="img" src={Logo} />
          </ColumnContainer>
          <List sx={{ color: "white" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Menu" />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <QrCodeIcon />
                </ListItemIcon>
                <ListItemText primary="QR Code" />
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
