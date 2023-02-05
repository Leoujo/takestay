import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "takestay",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

// ALERT: Study this two lines in the future

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
