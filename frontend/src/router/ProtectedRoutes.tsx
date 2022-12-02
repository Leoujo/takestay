import { Outlet } from "react-router-dom";
import { MobileHome } from "../pages/Home/MobileHome";

export const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <MobileHome />;
};
