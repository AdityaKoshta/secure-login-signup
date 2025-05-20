import {Button} from "./ui/button";
import { Link } from "react-router-dom";
import React from "react";
import Login from "./Login/Login.tsx";
import Signup from "./Signup/Signup.tsx";


export default function HeroSection() {
    return(
        <div className="shadow-xl/30 rounded-xl px-6 py-30 text-sm leading-20">

            
            <h1 className="text-3xl font-semibold font-serif text-center">Welcome to the app</h1>
            <p className="text-xl font-normal">built with React, Tailwind Css, and ShadCN UI.</p>
            
            <Link to="./Login" className="px-4 py-2 ml-30 bg-blue-500 text-white w-full rounded-md shadow-lg shadow-blue-500/50">Login</Link>&nbsp;/ &nbsp;
            <Link to="./Signup" className="px-4 py-2 bg-blue-500 text-white w-full rounded-md shadow-lg shadow-blue-500/50">Signup</Link>
           

        </div>
    )
}