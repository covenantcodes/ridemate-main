import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToken, IUser } from "types/apiTypes";

interface authState {
  user?: IUser | null;
  token?: IToken | null;
  loginDetails?: {
    email: string;
    name: string;
    avatar: string | null;
    tag: string;
  } | null;
  autoLoginDetails?: {
    email: string;
    password: string;
  } | null;
}

const initialState: authState = {
  user: null,
  token: null,
  loginDetails: null,
  autoLoginDetails: null,
};

export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    saveUser: (
      state: authState,
      { payload }: PayloadAction<{ user: IUser }>
    ) => {
      state.user = payload.user;
    },
    saveToken: (
      state: authState,
      { payload }: PayloadAction<{ token: IToken }>
    ) => {
      state.token = payload.token;
    },
    logout: (state: authState) => {
      state.user = null;
      state.token = null;
      state.autoLoginDetails = null;
    },
    storeLoginDetails: (
      state: authState,
      { payload }: PayloadAction<authState>
    ) => {
      state.loginDetails = payload.loginDetails;
    },
    storeAutoLoginDetails: (
      state: authState,
      { payload }: PayloadAction<{ email: string; password: string }>
    ) => {
      state.autoLoginDetails = payload;
    },
    clearLoginDetails: (state) => {
      state.loginDetails = null;
    },
    clearAutoLoginDetails: (state) => {
      state.autoLoginDetails = null;
    },
  },
});

export const {
  saveUser,
  logout,
  storeLoginDetails,
  clearLoginDetails,
  clearAutoLoginDetails,
  storeAutoLoginDetails,
  saveToken,
} = authSlice.actions;

export default authSlice.reducer;
