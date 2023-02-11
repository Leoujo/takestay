import { Item } from "../../common/models";
import { axiosClient } from "../axios";

// COFFEE SHOP
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

// CATEGORY
export const createCategory = async (name: string, ownerId: string) => {
  const payload = {
    name: name,
  };
  let categoryData = await axiosClient.post(`/coffeeshops/category/${ownerId}/`, payload);
  return categoryData.data;
};

// ITEM
export const getItemsFromCategory = async (categoryId: number): Promise<Item[]> => {
  let itemsData = await axiosClient.get(`/coffeeshops/items/${categoryId}`);
  return itemsData.data;
};
