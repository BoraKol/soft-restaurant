import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const ordersSlice= createSlice({
    name:"orders",
    initialState: {
        orders:[],
    },
      
    extraReducers: {

    },

});

export default ordersSlice.reducer;



