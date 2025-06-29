import React, { useContext, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa';
import { GlobalContext } from '../context'
import RecipeItem from '../Components/RecipeItem';

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);
  
  function handleClick(){
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  return (
    <div className="home-container pt-4" onClick={handleClick}>
      <h3 className="text-center">{recipeList.length + " Results" } </h3>
      <button className="backToTop bg-success text-light"><FaChevronUp /></button>
      { !loading 
        ? recipeList.length === 0
        ? <div  className="text-center mt-5" ><h2> Recipe Not Found.</h2><p>Try seraching another recipe</p></div>
        : <div className="row gap-0 row-gap-3">
         { ( recipeList && recipeList.length > 0 ) 
          && recipeList.map( item => (
            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                <RecipeItem item={item} />
            </div>
          ))
         }</div>
        : <div class="d-flex justify-content-center mt-5">
            <div class="spinner-border" role="status" style={{width:"5rem" , height:"5rem", color:"orange"}}>
            <span class="visually-hidden">Loading...</span>
            </div>
          </div>     
       }
    </div>
  )
}

export default Home