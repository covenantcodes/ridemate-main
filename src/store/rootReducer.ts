// src/store/rootReducer.ts
import {combineReducers} from "@reduxjs/toolkit";
import {globalApi} from "api/globalApi";
import {persistReducer, Storage} from "redux-persist";
import authSlice from "screens/auth/login/login.slice";
import appSlice from "screens/appSlice";
import {createMMKV} from "react-native-mmkv";

export const appStorage = createMMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    appStorage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = appStorage.getString(key);
    return Promise.resolve(value ?? undefined);
  },
  removeItem: key => {
    appStorage.remove(key);
    return Promise.resolve();
  },
};

const mainPersistConfig = {
  key: "main",
  storage: reduxStorage,
  blacklist: [],
};

export const main = persistReducer(
  mainPersistConfig,
  combineReducers({
    [globalApi?.reducerPath]: globalApi?.reducer,
    login: authSlice,
    app: appSlice,
  }),
);
