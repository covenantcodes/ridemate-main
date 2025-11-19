import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
  user: any | null;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{token: string; user: any}>) => {
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
    },
    clearAuth: state => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const {setAuth, clearAuth} = authSlice.actions;
export default authSlice.reducer;
