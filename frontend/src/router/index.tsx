import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { QrCode } from "../pages/qrcode";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Routes>
    </BrowserRouter>
  );
};
