import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

import axios from "axios";

export const addNewUserAsync= createAsyncThunk('users/register' ,async(data)=> {
    const response= await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/users/register`,data);
    return await response.data.data.users;
})

export const userIsLoginedAsync= createAsyncThunk('users/login' , async(data) => {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/users/login` ,data);
    return await response.data.data.users;
} ) 

export const addUserAdressAsync= createAsyncThunk('users/address' , async(data)=> {
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_ENDPOINT}/users/address` , data);
    console.log(response.data);
    return await response.data.data.users;
})

export const usersSlice= createSlice({
    name:"users",
    initialState: {
        users: [],
        loggedInUser:{
            email:null,
            password:null,
            addNewAddress: {
                name: null,
                lastName:null,
                phoneNumber:null,
                description: null,
                
            },
            address:null,
        },
        
    },
   
    error: null,
    
    extraReducers: (builder) => {
        builder
          .addCase(addNewUserAsync.fulfilled, (state, action) => {
            state.users.push(action.payload);
            console.log(state.users);
            alertify.success('Kaydolma işlemi başarılı.');
          })
          .addCase(addNewUserAsync.rejected, (state, action) => {
            state.error = action.error.message;
            alertify.error('Kaydolma işlemi başarısız.');
          })
          .addCase(userIsLoginedAsync.fulfilled, (state, action) => {
            state.loggedInUser = action.payload;
            console.log('Giriş başarılı!!');
            alertify.success('Giriş başarılı!!');
           
          })
          .addCase(userIsLoginedAsync.rejected, (state, action) => {
            state.error = action.error.message;
            alertify.error('Giriş yapılamadı...');
          })
          .addCase(addUserAdressAsync.fulfilled, (state, action) => {
            state.loggedInUser.address = action.payload;
            console.log('Yeni adres eklendi!');
            alertify.success('Adres eklendi!');
          })
          .addCase(addUserAdressAsync.rejected, (state, action) => {
            state.error = action.error.message;
            alertify.error('Adres eklenemedi...');
          });
      }
      
});

export default usersSlice.reducer;