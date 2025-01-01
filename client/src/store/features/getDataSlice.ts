import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GetDataState } from "../../Types/Types";

export const getAllData = createAsyncThunk("fetchData", async () => {
  const response = await axios.get("/api/test");
  const result = response.data;
  return result;
});

const initialState: GetDataState = {
  message: {},
  loading: false,
  error: null,
};

export const getData = createSlice({
  name: "getData",
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllData.fulfilled, (state, action) => {
      (state.loading = false), (state.message = action.payload);
    });
    builder.addCase(getAllData.rejected, (state, action) => {
      (state.loading = false),
        (state.error = action.error.message || "Error Calling Api");
    });
  },
});

export default getData.reducer;
