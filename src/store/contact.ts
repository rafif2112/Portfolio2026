/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import api from "@/config/api";
import type { ContactData, ContactState } from "@/types/contact";

const initialState: ContactState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchContactData = createAsyncThunk(
  "contact/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/contact");
      return response.data.data as ContactData;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch data");
    }
  },
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchContactData.fulfilled,
        (state, action: PayloadAction<ContactData>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchContactData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = contactSlice.actions;
export default contactSlice.reducer;