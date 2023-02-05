import { axiosClient } from "../axios";

export const getCoffeeShop = async (coffeeshopId: string) => {
  let coffeeShopData = await axiosClient.get(`/coffeeshops/${coffeeshopId}`);
  return coffeeShopData.data;
};

export const createCoffeeShop = async (name: string, ownerId: string) => {
  const payload = {
    name: name,
    owner_id: ownerId,
  };
  let coffeeShopData = await axiosClient.post(`/coffeeshops/`, payload);
  return coffeeShopData.data;
};
