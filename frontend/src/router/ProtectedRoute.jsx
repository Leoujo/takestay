import { Navigate, Outlet } from "react-router";
import { isTokenValid } from "../utils";

export const ProtectedRoute = () => {
  if (!isTokenValid(localStorage.token)) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
