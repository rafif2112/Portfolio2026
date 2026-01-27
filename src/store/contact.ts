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

export const sendContactForm = createAsyncThunk(
  "contact/sendForm",
  async (formData: { name: string; email: string; message: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/contact/send-email", formData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to send message");
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
      })
      .addCase(sendContactForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendContactForm.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = contactSlice.actions;
export default contactSlice.reducer;