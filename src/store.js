import { configureStore } from "@reduxjs/toolkit";
import { api } from "./redux/api/api";
import playerSlice from "./redux/slices/playerSlice";

const store = configureStore({
  reducer: {
    players: playerSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
