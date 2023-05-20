import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/brand/logo.png";
import { Background, ColumnContainer, Image } from "../../../styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LogoutIcon from "@mui/icons-material/Logout";
import QrCodeIcon from "@mui/icons-material/QrCode";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { resetOwner } from "../../../../store/slices/userSlice";

export const MenuDrawer: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const logOutHandler = () => {
    navigate("/");
    dispatch(resetOwner());
    localStorage.removeItem("token");
  };

  return (
    <>
      <ListItemButton>
        <MenuIcon onClick={handleDrawerToggle} />
      </ListItemButton>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <Background>
          <ColumnContainer justify="flex-start" margin="10px 0">
            <Image src={Logo} width="150px" />
          </ColumnContainer>
          <List sx={{ color: "white" }}>
            <ListItem disablePadding onClick={() => navigate("/menu")}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Menu" />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => navigate("/qrcode")}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <QrCodeIcon />
                </ListItemIcon>
                <ListItemText primary="QR Code" />
                <ArrowForwardIosIcon />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => logOutHandler()}>
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
