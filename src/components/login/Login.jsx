import React, { useState,useEffect } from "react";
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';
import burgerLogo from "../../assets/backgroundyok.png";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

import { userIsLoginedAsync } from "../../redux/slices/usersSlice";

import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const {users} = useSelector((state) => state.users);

  const dispatch =useDispatch();

  // const handleLogin = () => {
  //   const userExists = users.some(user => user.email === email && user.password === password);

  //   if (userExists) {
  //     alertify.success("Giriş başarılı!");
  //     console.log("Giriş başarılı!");
   
  //   } else {
  //     alertify.error("Hatalı giriş bilgileri!");
  //     console.log("Hatalı giriş bilgileri!");
  
  //   }
  // };

  const handleLogin = (e) => {
    e.preventDefault();

    try {
       dispatch(userIsLoginedAsync({ email, password }));
       console.log(email)
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alertify.error(`Giriş yapılamadı: ${error.response.data.message}`);
      } else {
        alertify.error("Giriş yapılamadı. Bir hata oluştu.");
      }
    
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 from-white ">
      <div className="bg-white p-12 rounded-lg shadow-lg mt-20">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          <img
            src={burgerLogo}
            alt="Burger Logo"
            className="w-[150px] h-[150px] mx-auto mb-2"
          />
          Soft Restorana Hoşgeldiniz
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-800"
            >
              E-Posta
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-posta"
              id="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-purple-200 focus:border-purple-500"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-800"
            >
              Şifre
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
              placeholder="Şifre"
              id="password"
              name="password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-red-200 focus:border-red-500"
            />
            {/* Show Password toggle icon */}
            <div
               className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-md w-full font-semibold transition duration-300 mt-5"
            type="submit"
            onClick={handleLogin}
          >
            Giriş Yap
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          Henüz bir hesabınız yok mu?{" "}
          <Link to="/signup">
            <button className="text-red-500 hover:underline font-semibold">
              Kaydolun
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
