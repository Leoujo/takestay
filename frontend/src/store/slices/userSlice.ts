import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../common/models";

const initialState: User = {
  id: "",
  name: "",
  email: "",
  coffeeShop: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const { id, name, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
    setUserCoffeeShop: (state, action) => {
      console.log(action.payload);
      state.coffeeShop = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const { loginUser, setUserCoffeeShop, resetUser } = userSlice.actions;

export default userSlice.reducer;
