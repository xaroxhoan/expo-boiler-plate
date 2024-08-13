import { authSlice } from "./auth";

const authReducer = authSlice.reducer;

const { setLogin } = authSlice.actions;

export { authReducer, setLogin };
