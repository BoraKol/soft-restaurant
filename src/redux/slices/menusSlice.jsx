import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const menusSlice= createSlice({
    name:"menus",
    initialState:{
        menus:[],
    },

    extraReducers: {

    },

});

export default menusSlice.reducer;