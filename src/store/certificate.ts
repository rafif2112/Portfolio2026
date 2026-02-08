/* eslint-disable @typescript-eslint/no-explicit-any */
import {  createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import api from '@/config/api';

const initialState: CertificateState = {
    data: [] as CertificateData[],
    loading: false,
    error: null,
};

export const fetchCertificateData = createAsyncThunk(
    'certificate/fetchData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('/certificates/data');
            return response.data.data as CertificateData[];
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Failed to fetch data');
        }
    },
);

const certificateSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCertificateData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchCertificateData.fulfilled, (state, action: PayloadAction<CertificateData[]>) => {
                    state.loading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchCertificateData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearError } = certificateSlice.actions;
export default certificateSlice.reducer;