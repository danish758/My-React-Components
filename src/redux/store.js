import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { faqsService } from "../faqs/faqsService";
import { loginService } from "../login/service";
import authSlice from "../login/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import snackService from "../snack.service";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
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
  whitelist: ["authSlice"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
console.log("redux", "store");
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;

export let persistore = persistStore(store);
