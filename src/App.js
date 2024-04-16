import React from "react";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage";
import FoodDetail from "./pages/FoodDetail/FoodDetail";
import ExploreFood from "./pages/ExploreFood/ExploreFood";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/ExploreFood" element={<ExploreFood/>}/>
      
      <Route path="/details" element={<FoodDetail/>}/>
    </Routes>
    
    </>
  );
};

export default App;
