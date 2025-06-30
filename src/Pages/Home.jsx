import React, { useContext, useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { GlobalContext } from '../context'
import RecipeItem from '../Components/RecipeItem';
import Pages from '../Components/Pages';

const Home = () => {
  const { loading, recipeList, searchParam } = useContext(GlobalContext);
  const [ startIndex, setStartIndex ] = useState(0);
  const [ endIndex, setEndIndex ] = useState(10);

 
  
  function handleClick(){
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  

  // If a filteredData array exists, use it for display and count
  const { filteredData } = useContext(GlobalContext);
  const displayList = filteredData && filteredData.length > 0 ? filteredData : recipeList;
  const showResultsCount = displayList && displayList.length > 0 && searchParam ? displayList.length : 0;

  return (
    <div className="home-container pt-4">
      <h3 className="text-center">{showResultsCount + " Results"}</h3>
      <button  onClick={handleClick} className="backToTop bg-success text-light"><FaArrowUp /></button>
      { !loading 
        ? displayList.length === 0
        ? <div  className="text-center mt-5" ><h2> Recipe Not Found.</h2><p>Try seraching another recipe</p></div>
        : <div className="row gap-0 row-gap-3">
         { 
         ( displayList && displayList.length > 0 ) 
          && displayList.slice(startIndex, endIndex || null).map( (item) => (
            <div className="col-lg-4 col-md-6 col-12 px-4" key={item.id}>
                <RecipeItem item={item} />
            </div>
          ))
         }
        <Pages setStartIndex={setStartIndex} setEndIndex={setEndIndex}/>
         </div>
        : <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border" role="status" style={{width:"5rem" , height:"5rem", color:"orange"}}>
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>     
       }
    </div>
  )
}

export default Home