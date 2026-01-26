/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import api from "@/config/api";
import type { AboutData } from "@/types/about";

interface AboutState {
  data: AboutData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AboutState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAboutData = createAsyncThunk(
  "about/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/about");
      return response.data.data as AboutData;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch data");
    }
  },
);

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAboutData.fulfilled,
        (state, action: PayloadAction<AboutData>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = aboutSlice.actions;
export default aboutSlice.reducer;
