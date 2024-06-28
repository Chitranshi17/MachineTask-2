import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import Products from "./Screens/Products";

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Products/>}/>
    </Routes>
   </Router>
  );
};

export default App;
