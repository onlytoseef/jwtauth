import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { todoData } from "../../Types/Types";
import axios from "axios";

export const createTodo = createAsyncThunk(
  "todo/addTodo",

  async (todoForm: todoData, { rejectWithValue }) => {
    try {
      const createNewTodo = await axios.post("/api/todo/addTodo", todoForm);
      const response = createNewTodo.data;
      console.log("response", response);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Add Todo Failed");
    }
  }
);

export const getAllTodo = createAsyncThunk("todo/getTodos", async () => {
  try {
    const Todos = await axios.get("/api/todo/getTodo");
    const AllTodos = Todos.data;
    return AllTodos;
  } catch (error) {
    console.log("Error Fetching Todos from server", error);
  }
});

const initalState = {
  todo: null,
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initalState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createTodo.pending, (state) => {
      state.error = null;
      state.isLoading = true;
      state.todo = null;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.todo = action.payload;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.error = action.error as any;
      state.isLoading = false;
      state.todo = null;
    });
  },
});

export default todoSlice.reducer;
