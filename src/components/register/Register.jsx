import React, { useState } from "react";

import "../../App.css";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { addNewUserAsync } from "../../redux/slices/usersSlice";

import  burgerLogo from "../../assets/burger-logo.jpeg";
import { useDispatch,useSelector } from "react-redux";

import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';

// import User from "./components/User";

import { Link } from "react-router-dom";

// backend tarafına post edilmesi için gerekli işlemler buraya yazılacak 

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName]= useState('');
    const [email, setEmail] = useState('');
    const [birthDate,setBirthDate] = useState('');
    //const [phoneNumber,setPhoneNumber]= useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isSubmitted,setIsSubmitted]= useState(false);
    const [error,setError]=useState(false);
    
    const dispatch= useDispatch();
    const {users} = useSelector((state) => state.users);
       
   
    const handleSubmit = (e) => {

         e.preventDefault();    
        
        if (
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            email.trim() === '' ||
            birthDate === '' ||
          
            password === '' || password.length < 8 ||
            confirmPassword === ''
        ) {
            setError(true);
            alertify.error("Tüm alanların doldurulması zorunludur!")
            return;
        }
    
        if (password !== confirmPassword) {
            alertify.error('Şifreler uyuşmuyor!');
            console.log("Şifreler uyuşmuyor!")
            return;
        }

        setIsSubmitted(true);
        setError(false);

           
           dispatch(addNewUserAsync({firstName,lastName,email,
            password,birthDate
        }));
    }
    
    return (
        <div>
    
            
            <div className="auth-form-container">
      
                <h2> <strong>Kayıt Ol</strong></h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">İsim</label>
                <input value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" placeholder="İsim" required/>
                <label htmlFor="lastName">Soyisim</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Soyisim" id="lastName" name="lastName" required />
                <label htmlFor="email">E-Posta</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-Posta" id="email" name="email" required/>
                <label htmlFor="dateOfBirth">Doğum Tarihi</label>
                <input value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date" id="dateOfBirth" name="dateOfBirth" required/>
    
                <label htmlFor="password">Şifre</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Şifre" required/>
                <label htmlFor="confirmPassword">Şifre Tekrarı</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="confirmPassword" name="confirmPassword" placeholder="Şifre Tekrarı" required/>
                <button type="submit" className="login-register-btn" onClick={handleSubmit} ><strong>Kaydol</strong></button>
            </form>
            <Link to="/signin">
            <button className="login-link-btn" type="submit" >Zaten hesabın var mı?  <strong>Giriş yap</strong> </button>
             </Link>
            </div>

        </div>
  )
}

export default Register;



