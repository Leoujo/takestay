import { useQuery } from "react-query";
import { getCoffeeShop } from "../../api/services/coffeeshops";
import { useSelector } from "react-redux";
import { Navbar } from "../../common/components/Navbar";
import { RootState } from "../../store/store";
import { Menu } from "./components/Menu";
import { Profile } from "./components/Profile";

export const Home = () => {
  const { id: userId } = useSelector((state: RootState) => state.user);
  const { data } = useQuery(["myCoffeeShop"], () => getCoffeeShop(10), {
    retry: false,
  });

  return (
    <>
      <Navbar />
      <Profile />
      <Menu />
    </>
  );
};
