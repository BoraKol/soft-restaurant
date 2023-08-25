import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const getProductsAsync= createAsyncThunk('products/', async(data)=> {
    const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products`);
    console.log("all",response.data.data);
    return await response.data.data;
})

// export const getProductsByCategoryIdAsync= createAsyncThunk('products/', async(data)=> {
//     const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products/getByCategoryId` ,{categoryId: data.categoryId});
//     console.log(response.data);
//     return await response.data.data;
// })

export const getProductsByCategoryIdAsync = createAsyncThunk("products/", async (id) => {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products/getByCategoryId`, {
        categoryId: id
      });
      console.log("id",response.data.data);
      return response.data.data.products;
    }
  );

export const productsSlice= createSlice({
    name: "products",
    initialState: {
        products: [],
        isLoading: false,
        error:null,
    },

    extraReducers: {

        // [getProductsAsync.pending] : (state) => {
        //     state.isLoading=true;
        // },

        [getProductsAsync.fulfilled] : (state,action) => {
            state.products=action.payload;
            state.isLoading=false;
        },

        [getProductsAsync.rejected]: (state, action) => {
            state.error = action.error.message;
          },

        // [getProductsByCategoryIdAsync.pending]: (state) => {
        //     state.isLoading = true;
        //  },
          [getProductsByCategoryIdAsync.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
          },
          [getProductsByCategoryIdAsync.rejected]: (state, action) => {
            state.error = action.error.message;
          },

    },

});

export default productsSlice.reducer;