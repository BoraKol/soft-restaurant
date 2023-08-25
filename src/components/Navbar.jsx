import React from 'react'
import { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import logo from '../assets/backgroundyok.png';
import pic from '../assets/bannerbackground.png'
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [changeHeader, setChangeHeader] = useState(false)
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3 z-10">
                <div className="flex flex-grow">
                    <img className="w-36 cursor-pointer" src={logo} alt="logo"  />
                </div>    
                
                <div className="flex items-center justify-end space-x-6">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    </ul>

                    <Link to="/signin">
                    <button className="poppins text-black" >Sign In</button>
                    </Link>

                    <Link to="/signup">
                    <button className=" bg-red-500 px-6 py-3 text-white poppins rounded-full  focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105" >Sign Up</button>
                    </Link>
                </div>
                
                       
            </nav>
        </header>
        
    )
}

export default Navbar