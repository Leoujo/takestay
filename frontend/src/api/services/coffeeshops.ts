import { axiosClient } from "../axios";

export const getCoffeeShop = async (coffeeshopId: string) => {
  let coffeeShopData = axiosClient.get(`/coffeeshops/${coffeeshopId}`);
  return coffeeShopData;
};
