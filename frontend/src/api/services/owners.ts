import { axiosClient } from "../axios";

export const loginOrCreateOwner = async (ownerId: number, data: any) => {
  const owner = axiosClient.post(`/login/${ownerId}`, { data: data });
  return owner;
};
