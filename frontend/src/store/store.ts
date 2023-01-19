import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice
  },
});

// ALERT: Study this two lines in the future

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
