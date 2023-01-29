import { useQuery } from "react-query";
import { getCoffeeShop } from "../../api/services/coffeeshops";
import { useSelector } from "react-redux";
import { Navbar } from "../../common/components/Navbar";
import { RootState } from "../../store/store";
import { Menu } from "./components/Menu";
import { Profile } from "./components/Profile";

export const Home = () => {
  const { id: userId } = useSelector((state: RootState) => state.user);
  const { data, isError, isLoading } = useQuery(["myCoffeeShop"], () => getCoffeeShop(userId), {
    retry: false,
  });

  console.log(data);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>Create new coffeeshop</div>;
  }

  return (
    <>
      <Navbar />
      <Profile />
      <Menu />
    </>
  );
};
