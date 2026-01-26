/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import api from "@/config/api";

const initialState: ProjectsState = {
  data: [] as ProjectData[],
  loading: false,
  error: null,
};

export const fetchProjectData = createAsyncThunk(
  "project/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/projects/data");
      return response.data.data as ProjectData[];
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch data");
    }
  },
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProjectData.fulfilled,
        (state, action: PayloadAction<ProjectData[]>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchProjectData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = projectSlice.actions;
export default projectSlice.reducer;
