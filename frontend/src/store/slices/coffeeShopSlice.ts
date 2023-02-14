import { createSlice } from "@reduxjs/toolkit";
import { CoffeeShop } from "../../common/models";

// I'm not using this slice for now.
const initialState: CoffeeShop = {
  name: "",
  isEditable: false,
  ownerId: "",
  categories: [],
};

const coffeeShopSlice = createSlice({
  name: "coffeeShop",
  initialState: initialState,
  reducers: {
    setCoffeeShop: (state, action) => {
      state.name = action.payload.name;
      state.ownerId = action.payload.owner_id;
      state.categories = action.payload.categories;
    },
    setViewOnlyToggle: (state) => {
      state.isEditable = !state.isEditable;
    },
    resetCoffeeShop: () => initialState,
  },
});

export const { setCoffeeShop, setViewOnlyToggle, resetCoffeeShop } = coffeeShopSlice.actions;

export default coffeeShopSlice.reducer;
