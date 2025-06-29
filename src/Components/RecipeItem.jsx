import React from 'react'
import { NavLink } from 'react-router-dom'

const RecipeItem = ({item}) => {
  return (
    <div className="px-3">
    <div class="col" >
    <div class="card  rounded-4" style={{backgroundColor:"orange"}}>
      <img src={item.image_url} class="card-img-top" className="food-image" alt="..."/>
      <div class="card-body">
         <p className="text-light" ><span><strong className="text-dark">Publisher: </strong></span>{item.publisher}</p>
        <h5 class="card-title">{item.title}</h5>
        <NavLink to={`recipe-Item/${item.id}`}><button className="btn btn-dark">Recipe Details</button></NavLink>
      </div>
    </div>
  </div></div>
  )
}

export default RecipeItem