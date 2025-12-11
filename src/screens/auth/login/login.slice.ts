import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "types/apiTypes";

interface LoginState {
  accessToken: string | null;
  refreshToken: string | null;
  user: Partial<IUser> | null;
}

const initialState: LoginState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{
        accessToken: string;
        refreshToken: string;
        user: Partial<IUser>;
      }>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    updateAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    updateUser(state, action: PayloadAction<Partial<IUser>>) {
      state.user = {...state.user, ...action.payload};
    },
    logout(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const {setAuth, updateAccessToken, updateUser, logout} =
  loginSlice.actions;
export default loginSlice.reducer;
