import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const playerSlice = createSlice({
  name: "players",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default playerSlice.reducer;
