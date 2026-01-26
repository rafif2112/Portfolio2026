/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import api from "@/config/api";

const initialState: StatsState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchStatsData = createAsyncThunk(
  "stats/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/stats");
      return response.data.data as StatsData;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch data");
    }
  },
);

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchStatsData.fulfilled,
        (state, action: PayloadAction<StatsData>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchStatsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = statsSlice.actions;
export default statsSlice.reducer;