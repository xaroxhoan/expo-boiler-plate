import { authSlice } from "./auth";

const authReducer = authSlice.reducer;

const { setLogin, setLogout } = authSlice.actions;

export { authReducer, setLogin, setLogout };
