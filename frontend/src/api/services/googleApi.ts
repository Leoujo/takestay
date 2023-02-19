import { axiosClient } from "../axios";

// COFFEE SHOP
export const googleLogin = async (data: string | undefined) => {
  console.log(data);
  let coffeeShopData = await axiosClient.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    //  headers: {
    //    Authorization: `Bearer ${credentialId}`,
    //  },
  });

  return coffeeShopData.data;
};
