import { axiosClient } from "../axios";

export const getCoffeeShop = async (coffeeshopId: string) => {
  let coffeeShopData = await axiosClient.get(`/coffeeshops/${coffeeshopId}`);
  return coffeeShopData.data;
};
