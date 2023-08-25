import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const getCartItemsAsync= createAsyncThunk("carts/" , async(data)=> {
    const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/carts`);
    console.log(response.data);
    return await response.data.data;

});

export const addItemToCartAsync=createAsyncThunk("carts/" , async(data)=> {
    const response= await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/carts`);

    
    return await response.data;
})

export const cartsSlice=createSlice({
    name:"carts",
    initialState:{
        carts:[],
    },

    extraReducers: {
      [getCartItemsAsync.fulfilled] : (state,action)=> {
        state.carts=action.payload;
    },
      [getCartItemsAsync.rejected] : (state,action) => {
        state.error=action.error.message;
      },

      [addItemToCartAsync.fulfilled] : (state,action) => {
        state.carts.push(action.payload);          
      },

      [addItemToCartAsync.rejected] : (state,action) => {
        state.error=action.error.message;
      },

    }
        
});

export default cartsSlice.reducer;



