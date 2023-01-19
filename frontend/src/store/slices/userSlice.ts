import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../common/models";

const initialState: User = {
  name: "",
  email: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
