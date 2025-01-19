import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, UserData } from "../../Types/Types";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData: UserData, { rejectWithValue }) => {
    try {
      const result = await axios.post("/user/register", formData);
      const response = result.data;
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);

const initalState: AuthState = {
  user: null,
  Autheticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initalState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.Autheticated = false;
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.Autheticated = false;
      state.error = action.payload as string;
      state.isLoading = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.Autheticated = true;
      state.error = null;
      state.isLoading = false;
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;
