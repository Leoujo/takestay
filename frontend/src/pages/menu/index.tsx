import { Navbar } from "../../common/components/Navbar";
import { CoffeeShopProfile } from "./components/CoffeeShopProfile";
import { NoCoffeeShop } from "./components/NoCoffeeShop";
import { PageSkeleton } from "../../common/components/PageSkeleton/index";
import { Container } from "@mui/system";
import { CoffeeShop } from "../../common/models";
import { useQuery } from "react-query";
import { getCoffeeShop } from "../../api/services/coffeeshops";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export const Menu: React.FC = () => {
  const { user } = useSelector((state: RootState) => state);

  // Get coffee shop by a owner
  const { data, refetch, isFetching, isLoading } = useQuery(["CoffeeShopByOwner"], (): Promise<CoffeeShop> => getCoffeeShop(user.id), {
    retry: false,
  });
  if (isFetching) {
    return <PageSkeleton />;
  }

  const pageStateHandler = () => {
    if (data) {
      return <CoffeeShopProfile isPublic={false} coffeeShop={data} refetch={refetch} />;
    } else {
      return <NoCoffeeShop refetch={refetch} />;
    }
  };

  return (
    <>
      <Navbar isPublic={false} />
      <Container maxWidth="sm">{pageStateHandler()}</Container>
    </>
  );
};
