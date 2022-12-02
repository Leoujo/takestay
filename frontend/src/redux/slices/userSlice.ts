import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitialState } from "../../interfaces/InitialState";
import { LoginUser, User } from "../../interfaces/User";
import userService from "../../services/userService";

const initialState: InitialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

export const createUser = createAsyncThunk("user/create", async (user: User, thunkAPI) => {
  try {
    return await userService.create(user);
  } catch (error) {
    return thunkAPI.rejectWithValue("Error. Please, verify all the informations provided.");
  }
});

export const loginUser = createAsyncThunk("user/login", async (user: LoginUser, thunkAPI) => {
  try {
    return await userService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue("Error. Please, verify the login and passwords provided.");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.userData;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.user = null;
      });
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.userData;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
