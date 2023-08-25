import { configureStore } from "@reduxjs/toolkit";

import cartsSlice from "./slices/cartsSlice";

import productsSlice from "./slices/productsSlice";

import usersSlice from "./slices/usersSlice";

import categoriesSlice from "./slices/categoriesSlice";

import ordersSlice from "./slices/ordersSlice";

import menusSlice from "./slices/menusSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    carts:cartsSlice,
    users: usersSlice,
    categories: categoriesSlice,
    orders: ordersSlice,
    menus: menusSlice,

  },

}); 

