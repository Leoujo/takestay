import { CategoryItem, Coffeeshop } from "../interfaces/coffeeshopState";
import { Api } from "../providers";

const register = async (coffeeshopData: Coffeeshop) => {
  const response = await Api.post("/coffeeshop", coffeeshopData);
  return response.data;
};

const getOne = async (creatorId: number) => {
  const response = await Api.get(`/coffeeshops/${creatorId}`);
  return response.data;
};

const getAll = async () => {
  const response = await Api.get(`/coffeeshops/`);
  return response.data;
};
// Categories
const registerCategory = async (name: string, coffeeshopId: string) => {
  const response = await Api.post(`/coffeeshop/${coffeeshopId}/category`, { name });
  return response.data;
};

const deleteCategory = async (coffeeshopId: string, categoryId: string) => {
  const response = await Api.delete(`/coffeeshop/${coffeeshopId}/category/${categoryId}`);
  return response.data;
};

// Items
const registerItem = async (item: CategoryItem, coffeeshopId: string, categoryId: string) => {
  const response = await Api.post(`/coffeeshop/${coffeeshopId}/category/${categoryId}/item`, item);
  return response.data;
};

const coffeeshopService = {
  getOne,
  register,
  registerCategory,
  registerItem,
  getAll,
  deleteCategory,
};

export default coffeeshopService;
