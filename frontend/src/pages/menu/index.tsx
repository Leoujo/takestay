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
import { CoffeeShop } from "../../common/models";

interface Props {
  coffeeShop?: CoffeeShop;
  isFetching: boolean;
  refetch: () => void;
  isPublic?: boolean;
}

export const Menu: React.FC<Props> = ({ coffeeShop, isFetching, refetch, isPublic }) => {
  if (isFetching) {
    return <PageSkeleton />;
  }

  const pageStateHandler = () => {
    if (coffeeShop) {
      return <CoffeeShopProfile isPublic={isPublic} coffeeShop={coffeeShop} refetch={refetch} />;
    } else {
      return <NoCoffeeShop refetch={refetch} />;
    }
  };

  return (
    <>
      <Navbar isPublic={isPublic} />
      <Container maxWidth="sm">{pageStateHandler()}</Container>
    </>
  );
};
