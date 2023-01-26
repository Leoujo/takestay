import { axiosClient } from "../axios";

export const getCoffeeShop = async (coffeeshopId: number) => {
  let coffeeShopData = axiosClient.get(`/coffeeshops/${coffeeshopId}`);
  return coffeeShopData;
};
