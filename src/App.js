import React from "react";
import "./assets/css/style.css";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import FoodDetail from "./pages/FoodDetail/FoodDetail";
import ExploreFood from "./pages/ExploreFood/ExploreFood";
import FoodCategory from "./pages/FoodCategory/FoodCategory";

const App = () => {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/ExploreFood" element={<ExploreFood/>}/>
      
      <Route path="/details" element={<FoodDetail/>}/>
      <Route path="/foodCategory" element={<FoodCategory/>}/>

      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/home" element={<Home/>}/>
      
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>

      <Route path="/products" element={<Products/>}/>
      <Route path="/review" element={<Review/>}/>

      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>

      <Route path="/footer" element={<Footer/>}/>
      
    </Routes>
    
    </>
  );
};

export default App;
