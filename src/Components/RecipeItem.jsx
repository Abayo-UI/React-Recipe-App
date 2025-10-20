import React from 'react'
import { NavLink } from 'react-router-dom'

const RecipeItem = ({item}) => {
  return (
    <div className="h-100 recipe-card">
      <div className="card h-100 rounded-4" style={{backgroundColor:"orange"}}>
        <img src={item.image_url} className="card-img-top food-image" alt={item.title} />
        <div className="card-body d-flex flex-column">
          <p className="text-light mb-1"><strong className="text-dark">Publisher: </strong>{item.publisher}</p>
          <h5 className="card-title">{item.title}</h5>
          <div className="mt-auto">
            <NavLink to={`recipe-Item/${item.id}`}><button className="btn btn-dark">Recipe Details</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeItem