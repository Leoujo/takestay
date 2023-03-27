import { useQuery } from "react-query";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CoffeeShop } from "../common/models";
import { Login } from "../pages/login";
import { Menu } from "../pages/menu";
import { QrCode } from "../pages/qrcode";
import { getAllCoffeeShops, getCoffeeShop } from "../api/services/coffeeshops";
import { removeSpacesAndAccents } from "../utils";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Router = () => {
  const { user } = useSelector((state: RootState) => state);
  __;

  // Get all coffee shops
  const {
    data: coffeeShops,
    refetch: coffeeShopsRefetch,
    isLoading: coffeeShopsIsFetching,
  } = useQuery(["allCoffeeShops"], (): Promise<CoffeeShop[]> => getAllCoffeeShops(), {
    retry: false,
  });

  // Get coffee shop by a owner
  const {
    data: coffeeShopByOwner,
    refetch: coffeeShopByOwnerRefetch,
    isLoading: coffeeShopByOwnerIsFetching,
  } = useQuery(["CoffeeShopByOwner"], (): Promise<CoffeeShop> => getCoffeeShop(user.id), {
    retry: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/menu"
          element={<Menu coffeeShop={coffeeShopByOwner} isFetching={coffeeShopByOwnerIsFetching} refetch={coffeeShopByOwnerRefetch} />}
        />
        <Route path="/qrcode" element={<QrCode />} />
        {coffeeShops?.map((coffeeShop, key) => (
          <Route
            key={key}
            path={`/${removeSpacesAndAccents(coffeeShop.name)}`}
            element={<Menu coffeeShop={coffeeShop} isFetching={coffeeShopsIsFetching} refetch={coffeeShopsRefetch} isPublic />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
