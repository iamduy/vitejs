import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Loading = boolean;

const initialState: Loading = false;

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (_, action: PayloadAction<Loading>) => {
      return action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
