import React from 'react'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import Home from '../../components/Home'
import Menu from '../../components/Menu'
import Products from '../../components/Products'
import Review from '../../components/Review'
import Contact from '../../components/Contact'
import Blog from '../../components/Blog'
import Footer from '../../components/Footer'


const HomePage = () => {
  return (
    <div>
          <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default HomePage
