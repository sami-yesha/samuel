import React from 'react';
import FoodList from '../componenets/FoodList';
import food from './Foodx'
const Homescreen = () => {
   
  return (
    <div >
        <div className="row">   {food.map((food)=>{
       return <div className="col md-4">

       
<div>
    <FoodList  food={food}/>
</div>


       </div>
     })}</div>
  
    </div>
  );
}

export default Homescreen;
