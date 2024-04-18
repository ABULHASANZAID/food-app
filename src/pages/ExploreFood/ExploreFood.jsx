import React, { useEffect, useState } from 'react'
import './ExploreFood.css'

const ExploreFood = () => {
    const [foods, setFoods] = useState();
    const fetchFood =async ()=>{
       try {
        const res =await  fetch('https://dummyjson.com/recipes');
       const data = await res.json();
       setFoods(data.recipes);
        
       } catch (error) {
        console.error(error)
       }
    }
    console.log(foods)

    useEffect(()=>{
        fetchFood();
    },[])
    if(!foods){
        return <></>
    }
  return (
    <div className='explore-food'>

       {foods && foods.map((food)=>{
        return <div className="explore-food-card">
            <div className="">
                <img src={food.image} height={"300px"} alt="" />
            </div>
            <div className="">{food.name}</div>
        </div>
       })}

      
    </div>
  )
}

export default ExploreFood
