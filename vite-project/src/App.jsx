import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import {Routes,Route} from "react-router-dom"
import Login from './Login ';
import Home from './Home';


function App() {

  

  return (
    <>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/github-signin" element={<Home/>}/>
    </Routes>
    
    </>
  )
}

export default App
