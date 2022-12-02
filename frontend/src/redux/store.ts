import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import coffeeshopSlice from "./slices/coffeeshopSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    coffeeshop: coffeeshopSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
