import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, loginData, UserData } from "../../Types/Types";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/register",
  async (formData: UserData, { rejectWithValue }) => {
    try {
      console.log(formData);
      const result = await axios.post("api/user/register", formData);
      const response = result.data;
      console.log(response);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Registration failed");
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async (loginForm: loginData, { rejectWithValue }) => {
    try {
      console.log(loginForm);
      const result = await axios.post("/api/user/login", loginForm);
      const response = result.data;
      console.log(response);
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
  reducers: {
    logout: (state) => {
      (state.user = null), (state.Autheticated = false);
      state.error = null;
      state.isLoading = false;
    },
  },

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

    builder.addCase(loginUser.pending, (state) => {
      state.Autheticated = false;
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.Autheticated = true;
      state.error = null;
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.Autheticated = false;
      state.error = action.error as string;
      state.isLoading = false;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;

// gonna add redux query soon
// tomorrow i will apply the query
