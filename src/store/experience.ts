/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import api from '@/config/api';

const initialState: ExperienceState = {
    data: [] as ExperienceData[],
    loading: false,
    error: null,
};

export const fetchExperienceData = createAsyncThunk(
    'experience/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/experiences/data');
            return response.data.data as ExperienceData[];
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Failed to fetch data');
        }
    },
);

const experienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExperienceData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchExperienceData.fulfilled, (state, action: PayloadAction<ExperienceData[]>) => {
                    state.loading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchExperienceData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearError } = experienceSlice.actions;
export default experienceSlice.reducer;