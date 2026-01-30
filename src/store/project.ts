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

export const fetchProjectBySlug = createAsyncThunk(
  "project/fetchBySlug",
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/projects/${slug}`);
      return response.data.data as ProjectData;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch project");
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
      })
      .addCase(fetchProjectBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProjectBySlug.fulfilled,
        (state, action: PayloadAction<ProjectData>) => {
          state.loading = false;
          const existingIndex =
            state.data?.findIndex(
              (project) => project.slug === action.payload.slug,
            ) ?? -1;
          if (existingIndex >= 0) {
            if (state.data) {
              state.data[existingIndex] = action.payload;
            }
          } else {
            if (state.data) {
              state.data.push(action.payload);
            } else {
              state.data = [action.payload];
            }
          }
        },
      )
      .addCase(fetchProjectBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = projectSlice.actions;
export default projectSlice.reducer;
