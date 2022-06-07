import { configureStore } from "@reduxjs/toolkit";

import authReducers from "./slices/AuthSlices";


export const store = configureStore({
  reducer: {
    authProvider : authReducers,
  }
})