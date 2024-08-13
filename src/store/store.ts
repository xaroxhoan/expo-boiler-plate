import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";

const rootReducer = combineReducers<any>({
  auth: authReducer,
});

const persistConfig: PersistConfig<any> = {
  key: "PERSIST-KEY",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PURGE, REGISTER, PAUSE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
