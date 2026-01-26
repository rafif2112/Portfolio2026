/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import api from "@/config/api";

const initialState = {
  data: [] as Skill[],
  loading: false,
  error: null as string | null,
};

export const fetchSkillData = createAsyncThunk(
  "skill/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/skills/data");
      return response.data.data as Skill[];
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch data");
    }
  },
);

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkillData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSkillData.fulfilled,
        (state, action: PayloadAction<Skill[]>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchSkillData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = skillSlice.actions;
export default skillSlice.reducer;
