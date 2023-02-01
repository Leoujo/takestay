import { useQuery } from "react-query";
import { getCoffeeShop } from "../../api/services/coffeeshops";
import { useSelector } from "react-redux";
import { Navbar } from "../../common/components/Navbar";
import { RootState } from "../../store/store";
import { Menu } from "./components/Menu";
import { Profile } from "./components/Profile";
import { PageSkeleton } from "../../common/components/PageSkeleton";
import { CoffeeShop } from "../../common/models";
import { Button } from "@mui/material";
import { NoCoffeeShop } from "./components/NoCoffeeShop";
import { useEffect } from "react";

export const Home = () => {
  const { id: userId } = useSelector((state: RootState) => state.user);
  const { data, refetch, isError, isLoading } = useQuery<CoffeeShop>(["myCoffeeShop"], (): Promise<CoffeeShop> => getCoffeeShop(userId), {
    retry: false,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <PageSkeleton />;
  }

  const CoffeShopArea = () => {
    return (
      <>
        <Profile />
        <Menu />
      </>
    );
  };

  return (
    <>
      <Navbar />
      {isError ? <NoCoffeeShop /> : <CoffeShopArea />}
    </>
  );
};
