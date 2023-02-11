import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import coffeeShopSlice from "./slices/coffeeShopSlice";

const persistConfig = {
  key: "takestay",
  storage,
};

const reducers = combineReducers({
  user: userSlice,
  coffeeShop: coffeeShopSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

// ALERT: Study this two lines in the future

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
