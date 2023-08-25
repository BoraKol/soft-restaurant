import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

export const getCategoriesAsync =createAsyncThunk('categories/' , async(data) => {
    const response = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/categories`);
    console.log( response.data.data);
    return await response.data.data.categories;
})

 // export const addCategoryAsync= createAsyncThunk('categories/' , async(data) => {
 //   const response = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/categories` , data);
 //   return await response.data;
 // })

// export const updateCategoryAsync= createAsyncThunk('categories/updateCategoryAsync' , async({id,data})=> {
//     const response = await axios.patch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/categories/${id}`, data);
//     return response.data;
// }) 

// export const deleteCategoryAsync = createAsyncThunk('categories/deleteCategoryAsync' , async (id) => {
//     await axios.delete(`${process.env.REACT_APP_API_BASE_ENDPOINT}/categories/${id}`);
//     return await id;
// })

export const categoriesSlice = createSlice ({
    name:"categories",
    initialState:{
        categories: [],
        isLoading: false,
        error: null,
        addNewCategory: {
            isLoading: false,
            error:null,
        }
        
        
    },

    extraReducers: {
        // get categories
        // [getCategoriesAsync.pending] : (state) => {
        //     state.isLoading= true;
        // },
        [getCategoriesAsync.fulfilled] : (state,action)=> {
            state.categories=action.payload;
            state.isLoading=false;
        },
        [getCategoriesAsync.rejected] : (state,action) => {
            state.error=action.error.message;
        },

        // //add categories
        // [addCategoryAsync.fulfilled] : (state,action) => {
        //     state.categories.push(action.payload); 
        //     state.addNewCategory.isLoading= false;           
        // },
        // [addCategoryAsync.pending] : (state) => {
        //     state.addNewCategory.isLoading=true;
        // },
        // [addCategoryAsync.rejected] : (state,action) => {
        //     state.addNewCategory.isLoading=false;
        //     state.addNewCategory.error=action.error.message;
        // },

        // [updateCategoryAsync.fulfilled] : (state,action) => {
        //     const {id} = action.payload;
        //     state.categories.findIndex(item => item.id === id);

        //  },

        //  [deleteCategoryAsync.fulfilled] : (state,action) => {
        //     const id = action.payload;
        //     const filtered=state.categories.filter(item => item.id !== id);
        //     state.categories=filtered;
        //  }
         
    }

})

export default categoriesSlice.reducer;