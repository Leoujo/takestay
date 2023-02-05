import { useSelector } from "react-redux";
import { Navbar } from "../../common/components/Navbar";
import { RootState } from "../../store/store";
import { CoffeeShopProfile } from "./components/CoffeeShopProfile";
import { useQuery } from "react-query";
import { getCoffeeShop } from "../../api/services/coffeeshops";
import { NoCoffeeShop } from "./components/NoCoffeeShop";
import { PageSkeleton } from "../../common/components/PageSkeleton/index";

export const Home = () => {
  const { id: ownerId, name: ownerName } = useSelector((state: RootState) => state.user);
  // Jogar essa função no redux
  const { data, refetch, isFetching } = useQuery(["ownerCoffeeshop"], () => getCoffeeShop(ownerId), {
    retry: false,
  });

  if (isFetching) {
    return <PageSkeleton />;
  }

  return (
    <>
      <Navbar />
      {data ? <CoffeeShopProfile coffeeShop={data} ownerName={ownerName} refetch={refetch} /> : <NoCoffeeShop refetch={refetch} />}
    </>
  );
};
