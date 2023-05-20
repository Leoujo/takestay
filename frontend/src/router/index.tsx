import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Menu } from "../pages/menu";
import { QrCode } from "../pages/qrcode";
import { ProtectedRoute } from "./ProtectedRoute";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/menu" element={<Menu />} />
          <Route path="/qrcode" element={<QrCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
