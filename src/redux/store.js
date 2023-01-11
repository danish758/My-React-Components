import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { faqsService } from "../faqs/faqsService";
import { loginService } from "../login/service";
import authSlice from "../login/authSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import snackService from "../snack.service";
import selectedItemSlice from "./slices/selectedListItem";
import welcomeMsgSlice from "./slices/welcomeMsgSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { searchService } from "./searchService";
import { toDoService } from "./services/todos.service";
const reducers = combineReducers({
  [loginService.reducerPath]: loginService.reducer,
  [faqsService.reducerPath]: faqsService.reducer,
  [searchService.reducerPath]: searchService.reducer,
  [toDoService.reducerPath]: toDoService.reducer,
  authSlice,
  snackService,
  selectedItemSlice,
  welcomeMsgSlice,
});
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authSlice", "selectedItemSlice", "welcomeMsgSlice"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(faqsService.middleware, searchService.middleware),
});
export default store;

export let persistore = persistStore(store);
