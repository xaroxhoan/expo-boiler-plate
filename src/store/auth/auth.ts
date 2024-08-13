import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isLoggedIn: boolean;
  token: string | null;
};

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, { type, payload }: any) => {
      const { token } = payload || {};

      state.isLoggedIn = true;
      state.token = token;
    },
  },
});
