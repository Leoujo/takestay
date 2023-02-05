import { createSlice } from "@reduxjs/toolkit";
import { Owner } from "../../common/models";

const initialState: Owner = {
  id: "",
  name: "",
  email: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginOwner: (state, action) => {
      const { id, name, email } = action.payload;
      state.id = id;
      state.name = name;
      state.email = email;
      state.isLoggedIn = true;
    },

    resetOwner: () => initialState,
  },
});

export const { loginOwner, resetOwner } = userSlice.actions;

export default userSlice.reducer;
