import { imageListClasses, linkClasses } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'
import './FoodDetails.css'

const FoodDetail = () => {
  console.log("food details page")

    const {state} = useLocation()
    const product = state.product;
    console.log(state)
  return (
    <div className='details'>
      <div className='product-image-container'>
        <img src={product.img}/>
      </div>
      <div>
        {product.description}
      </div>
    
       
      
    </div>
  )
}

export default FoodDetail
