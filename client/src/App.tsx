import './App.css'
import HeroSection from "./Components/HeroSection";
import Login from "./Components/Login/Login.tsx";
import Signup from "./Components/Signup/Signup.tsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
         <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
