import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {baseUrl} from '../../utils/BaseUrl'

export const fetchPlayerAction = createAsyncThunk(
    "player/list",
    async ({ getState, dispatch }) => {
        try {
            const { data } = await axios.get(`${baseUrl}/api/`);
            return data;
          } catch (error) {
            if (!error?.response) throw error;
            return (error?.response?.data);
          }
    }
        
)

const playerSlices = createSlice({
    name: "players",
    initialState: {
      
    },
    extraReducers: builder => {
        builder.addCase(fetchPlayerAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverErr = undefined;
          });
          builder.addCase(fetchPlayerAction.fulfilled, (state, action) => {
            state.loading = false;
            state.usersList = action?.payload;
            state.appErr = undefined;
            state.serverErr = undefined;
          });
          builder.addCase(fetchPlayerAction.rejected, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverErr = action?.error?.message;
          });
    }
})

export default playerSlices.reducer;