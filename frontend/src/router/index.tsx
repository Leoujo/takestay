import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Menu } from "../pages/menu";
import { QrCode } from "../pages/qrcode";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );
};
