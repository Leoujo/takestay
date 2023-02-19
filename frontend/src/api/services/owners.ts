import { axiosClient } from "../axios";

export const loginOrCreateOwner = async (googleData: any) => {
  const filteredData = {
    id: googleData.sub,
    name: googleData.name,
    email: googleData.email,
  };
  const owner = axiosClient.post(`/owners/login`, filteredData);
  return owner;
};
