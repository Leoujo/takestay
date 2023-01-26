import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../common/models";

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      const { googleId, name, email } = action.payload;
      state.id = parseInt(googleId);
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
