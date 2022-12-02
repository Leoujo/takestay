import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MuiDrawer = () => {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const DrawerHandler = () => {
    setisDrawerOpen(!isDrawerOpen);
  };

  const logoutHandler = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <>
      <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={DrawerHandler}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={DrawerHandler}>
        <Box width="250px" bgcolor="primary.main" color="white">
          <Box width={210} src="/assets/logo/main.png" component="img" m="1em" alt="logo" />
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItemButton onClick={() => navigate("/profile")}>
              <ListItemIcon sx={{ color: "white" }}>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
              <ArrowForwardIosIcon />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/qrcode")}>
              <ListItemIcon sx={{ color: "white" }}>
                <CropFreeIcon />
              </ListItemIcon>
              <ListItemText primary="QR Code" />
              <ArrowForwardIosIcon />
            </ListItemButton>
            <ListItemButton onClick={logoutHandler}>
              <ListItemIcon sx={{ color: "white" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
              <ArrowForwardIosIcon />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
