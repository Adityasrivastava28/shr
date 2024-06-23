import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Poems from './Details/Poems'
import Home from "./Homepage/Home";
// import Index from "./header/Index";
import Join from "./Reviews/Join";
import Moon from "./Moon/Moon";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>
        <Route path="/" element={<Home/>}></Route>

          <Route path="/Gallery" element={<Join/>} /> Simplified the Route
          <Route path="/Poems" element={<Poems />} /> 
          <Route path="/Space" element={<Moon />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
