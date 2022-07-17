import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./../rtkApi/postApi";
import counterReducer from "./../slices/counterSlice";

export const mainApi = [postApi];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
});
