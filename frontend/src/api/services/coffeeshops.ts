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

export const deleteCategory = async (categoryId: number | undefined) => {
  let response = axiosClient.delete(`/coffeeshops/category/${categoryId}`);
  return response;
};

// ITEM
export const getItemsFromCategory = async (categoryId: number): Promise<Item[]> => {
  let itemsData = await axiosClient.get(`/coffeeshops/items/${categoryId}`);
  return itemsData.data;
};

export const createItem = async (categoryId: number | undefined, itemObject: Item) => {
  let categoryData = await axiosClient.post(`/coffeeshops/item/${categoryId}/`, itemObject);
  return categoryData.data;
};
