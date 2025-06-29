import React, { useContext } from 'react'
import { GlobalContext } from '../context';
import { NavLink } from 'react-router-dom';


const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="container pt-4">
      <h2 className="mb-4">Your Favorites</h2>
      {(!favoriteList || favoriteList.length === 0) ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="row">
          {favoriteList.map(item => (
            <div className="col-lg-4 col-md-6 col-12 mb-4" key={item.id}>
              <div className="card rounded-4" style={{backgroundColor:"orange"}}>
                <img src={item.image_url} className="card-img-top food-image" alt={item.title} />
                <div className="card-body">
                  <p className="text-light"><span><strong className="text-dark">Publisher: </strong></span>{item.publisher}</p>
                  <h5 className="card-title">{item.title}</h5>
                  <NavLink to={`/recipe-Item/${item.id}`}><button className="btn btn-dark">Recipe Details</button></NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites