import { axiosClient } from "../axios";

export const getCoffeeShop = async (ownerId: string) => {
  let coffeeShopData = await axiosClient.get(`/coffeeshops/${ownerId}`);

  return coffeeShopData.data[0];
};

export const createCoffeeShop = async (name: string, ownerId: string) => {
  const payload = {
    name: name,
    owner_id: ownerId,
  };
  let coffeeShopData = await axiosClient.post(`/coffeeshops/`, payload);
  return coffeeShopData.data;
};

export const createCategory = async (name: string, ownerId: string) => {
  const payload = {
    name: name,
  };
  let categoryData = await axiosClient.post(`/coffeeshops/category/${ownerId}/`, payload);
  return categoryData.data;
};
