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

export const Menu = () => {
  const { id: ownerId, name: ownerName } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, refetch, isFetching } = useQuery(["ownerCoffeeshop"], () => getCoffeeShop(ownerId), {
    retry: false,
    enabled: false,
    onError: () => navigate("/"),
  });

  // FIX: Check why this is necessary
  useEffect(() => {
    refetch();
  }, []);

  if (isFetching) {
    return <PageSkeleton />;
  }

  const pageStateHandler = () => {
    if (data) {
      return <CoffeeShopProfile coffeeShop={data} ownerName={ownerName} refetch={refetch} />;
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
