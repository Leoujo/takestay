import { Item } from "../../common/models";
import { axiosClient } from "../axios";

// COFFEE SHOP
export const getCoffeeShop = async (ownerId: string) => {
  let coffeeShopData = await axiosClient.get(`/coffeeshops/${ownerId}`);

  return coffeeShopData.data[0];
};

export const getAllCoffeeShops = async () => {
  let coffeeShopData = await axiosClient.get(`/coffeeshops`);

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

// CATEGORY
export const createCategory = async (name: string, ownerId: string) => {
  const payload = {
    name: name,
  };
  let categoryData = await axiosClient.post(`/coffeeshops/category/${ownerId}/`, payload);
  return categoryData.data;
};

// Fix: delete doesn't work (axios error)
export const deleteCategory = async (categoryId: number | undefined) => {
  let response = await axiosClient.delete(`/coffeeshops/category/${categoryId}`);
  return response;
};

// ITEM
export const getItemsFromCategory = async (categoryId: number): Promise<Item[]> => {
  let itemsData = await axiosClient.get(`/coffeeshops/items/${categoryId}`);
  return itemsData.data;
};

export const createItem = async (itemObject: Item, categoryId: number | undefined) => {
  let categoryData = await axiosClient.post(`/coffeeshops/item/${categoryId}/`, itemObject);
  return categoryData.data;
};
