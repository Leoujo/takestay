import { axiosClient } from "../axios";

export const loginOrCreateOwner = async (googleData: any) => {
  const { googleId, profileObj } = googleData;

  const filteredData = {
    id: googleId,
    name: profileObj.givenName,
    email: profileObj.email,
  };
  const owner = axiosClient.post(`/owners/login`, filteredData);
  return owner;
};
