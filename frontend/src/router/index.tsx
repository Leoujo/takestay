import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
