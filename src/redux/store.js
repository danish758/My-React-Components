import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { faqsService } from "../faqs/faqsService";
import { loginService } from "../login/service";
import authSlice from "../login/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import snackService from "../snack.service";
const reducers = combineReducers({
  [loginService.reducerPath]: loginService.reducer,
  [faqsService.reducerPath]: faqsService.reducer,
  authSlice,
  snackService,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["snackService"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   [loginService.reducerPath]: loginService.reducer,
  //   [faqsService.reducerPath]: faqsService.reducer,
  //   authSlice,
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginService.middleware),
});
export default store;

export let persistore = persistStore(store);
