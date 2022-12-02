import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Profile } from "../pages/Profile";
import { useEffect, useState } from "react";
import { PublicMenu } from "../pages/PublicMenu";
import coffeeshopService from "../services/coffeeshopService";
import { Coffeeshop } from "../interfaces/coffeeshopState";
import { removeSpacesAndAccents } from "../utils";
import { QRCodeMenu } from "../pages/QRCodeMenu";
import { Home } from "../pages/Home";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const Router = () => {
  const [coffeeshops, setCoffeeshops] = useState<Coffeeshop[]>();

  useEffect(() => {
    coffeeshopService
      .getAll()
      .then((response) => {
        setCoffeeshops(response.coffeeshops);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/qrcode" element={<QRCodeMenu />} />
        </Route>
        {coffeeshops?.map((coffeeshop, key) => (
          <Route path={`/${removeSpacesAndAccents(coffeeshop.name)}`} element={<PublicMenu coffeeshopData={coffeeshop} />} key={key} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
