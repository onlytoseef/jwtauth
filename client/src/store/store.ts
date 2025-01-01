import { configureStore } from "@reduxjs/toolkit";
import getData from "./features/getDataSlice";
import authSlice from "./features/authSlice";

export const store = configureStore({
  reducer: {
    app: getData,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
