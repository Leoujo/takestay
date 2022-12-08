import { LoginUser, User } from "../interfaces/User";
import { Api } from "../providers";

const getUserById = async (id: string | null) => {
  const response = await Api.get(`/users/${id}`);
  return response.data;
};

const create = async (userData: User) => {
  const response = await Api.post("/users/create", userData);
  localStorage.setItem("token", JSON.stringify(response.data.token));
  localStorage.setItem("userId", JSON.stringify(response.data.userData._id));
  localStorage.setItem("userData", JSON.stringify(response.data.userData));
  return response.data;
};

const login = async (userData: LoginUser) => {
  const response = await Api.post("/users/login", userData);
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("userId", JSON.stringify(response.data.userData._id));
    localStorage.setItem("userData", JSON.stringify(response.data.userData));
  }
  return response.data;
};

const userService = {
  getUserById,
  create,
  login,
};

export default userService;