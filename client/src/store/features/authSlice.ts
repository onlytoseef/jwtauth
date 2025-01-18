import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../Types/Types";

const initalState: AuthState = {
  user: null,
  Autheticated: true,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initalState,
  reducers: {},
});

export default authSlice.reducer;
