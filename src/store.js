import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    players: playerSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
