import { useQuery } from "react-query";
import { getCoffeeShop } from "../../api/services/coffeeshops";
import { useSelector } from "react-redux";
import { Navbar } from "../../common/components/Navbar";
import { RootState } from "../../store/store";
import { PageSkeleton } from "../../common/components/PageSkeleton";
import { CoffeeShop } from "../../common/models";
import { Button } from "@mui/material";
import { NoCoffeeShop } from "./components/NoCoffeeShop";
import { useEffect } from "react";
import { CoffeeShopProfile } from "./components/CoffeeShopProfile";

export const Home = () => {
  // Fix: Just use the redux or the react query to manage render.
  const { coffeeShop } = useSelector((state: RootState) => state.user);
  console.log(coffeeShop);
  //   const { refetch, isLoading } = useQuery<CoffeeShop>(["myCoffeeShop"], (): Promise<CoffeeShop> => getCoffeeShop(userId), {
  //     retry: false,
  //     enabled: false,
  //   });

  //   useEffect(() => {
  //     refetch();
  //   }, []);

  //   if (isLoading) {
  //     return <PageSkeleton />;
  //   }

  return (
    <>
      <Navbar />
      {coffeeShop ? <CoffeeShopProfile coffeeShop={coffeeShop} /> : <NoCoffeeShop />}
    </>
  );
};
