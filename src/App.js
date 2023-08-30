// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Navbar from './components/Navbar';
import LayoutWithNavbar from './components/LayoutWithNavbar';
import LayoutWithoutNavbar from './components/LayoutWithoutNavbar';

import Category from "./components/Category";
import Order from './components/Order';
import Cart from "./components/Cart";

import Delivery from "./components/Delivery/Delivery";
import Payment from "./components/Payment/Payment";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithNavbar>
              <HomeScreen />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/signin"
          element={
            <LayoutWithoutNavbar>
              <SignIn />
            </LayoutWithoutNavbar>
          }
        />
        <Route
          path="/signup"
          element={
            <LayoutWithoutNavbar>
              <SignUp />
            </LayoutWithoutNavbar>
          }
        />
        <Route
          path="/cart"
          element={
            <LayoutWithoutNavbar>
              <Cart />
            </LayoutWithoutNavbar>
          }
        />

  <Route path="/delivery" component={Delivery} />
  <Route path="/payment" component={Payment} />


        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
