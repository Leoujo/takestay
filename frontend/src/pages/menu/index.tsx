import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../common/components/Navbar";
import { RootState } from "../../store/store";
import { CoffeeShopProfile } from "./components/CoffeeShopProfile";
import { useQuery } from "react-query";
import { getCoffeeShop } from "../../api/services/coffeeshops";
import { NoCoffeeShop } from "./components/NoCoffeeShop";
import { PageSkeleton } from "../../common/components/PageSkeleton/index";
import { useEffect } from "react";
import { setCoffeeShop } from "../../store/slices/coffeeShopSlice";
import { Container } from "@mui/system";
import { useNavigate } from "react-router";
import { CoffeeShop } from "../../common/models";

interface Props {
  coffeeShop?: CoffeeShop;
  isFetching: boolean;
  refetch: () => void;
}

export const Menu: React.FC<Props> = ({ coffeeShop, isFetching, refetch }) => {
  if (isFetching) {
    return <PageSkeleton />;
  }

  const pageStateHandler = () => {
    if (coffeeShop) {
      return <CoffeeShopProfile coffeeShop={coffeeShop} refetch={refetch} />;
    } else {
      return <NoCoffeeShop refetch={refetch} />;
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm">{pageStateHandler()}</Container>
    </>
  );
};
