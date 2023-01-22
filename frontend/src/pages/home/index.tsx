import { Navbar } from "../../common/components/Navbar";
import { Menu } from "./components/Menu";
import { Profile } from "./components/Profile";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <Menu />
    </>
  );
};
