import { createSlice } from "@reduxjs/toolkit";
import { CoffeeShop } from "../../common/models";

// I'm not using this slice for now.
const initialState: CoffeeShop = {
  name: "",
  owner_id: "",
  categories: [],
};

const coffeeShopSlice = createSlice({
  name: "coffeeShop",
  initialState: initialState,
  reducers: {
    setCoffeeShop: (state, action) => {
      state.name = action.payload.name;
      state.owner_id = action.payload.owner_id;
      state.categories = action.payload.categories;
    },
    resetCoffeeShop: () => initialState,
  },
});

export const { setCoffeeShop, resetCoffeeShop } = coffeeShopSlice.actions;

export default coffeeShopSlice.reducer;
