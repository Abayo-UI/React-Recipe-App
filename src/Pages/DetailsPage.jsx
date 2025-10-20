
import React, { useContext, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context';
import ShareFeature from '../Components/ShareFeature';
import DownloadIngredients from '../Components/DownloadIngredients';


const DetailsPage = () => {
  const { id } = useParams();
  const { filteredData, setFilteredData, favoriteList, setFavoritelist, loading } = useContext(GlobalContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAdded, setShowAdded] = useState(false);


  async function fetchSelectedItem(){
    window.scrollTo(0,0)
    try{
       // Set loading true if not already handled globally
       // setLoading(true); // Not needed, handled in context if you want
       const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
       const data = await response.json();
       setFilteredData(data);
       // setLoading(false); // Not needed, handled in context if you want
       console.log(id)
       console.log(data);
    } 
    catch(e){
      console.log(e.message);
      // setLoading(false); // Not needed, handled in context if you want
      return "An error message occured, please try again later."
    }
  }

  useEffect(()=> {fetchSelectedItem()}, [])

  useEffect(() => {
    if (filteredData?.data?.recipe && favoriteList) {
      setIsFavorite(favoriteList.some(fav => fav.id === filteredData.data.recipe.id));
    }
  }, [filteredData, favoriteList]);

  const handleFavoriteToggle = () => {
    if (!filteredData?.data?.recipe) return;
    let updatedList = favoriteList ? [...favoriteList] : [];
    if (isFavorite) {
      updatedList = updatedList.filter(fav => fav.id !== filteredData.data.recipe.id);
      setIsFavorite(false);
      setShowAdded(false);
    } else {
      updatedList.push(filteredData.data.recipe);
      setIsFavorite(true);
      setShowAdded(true);
      setTimeout(() => setShowAdded(false), 1500);
    }
    setFavoritelist(updatedList);
  };


  return (
    <div className="details-container">
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border" role="status" style={{width:"5rem" , height:"5rem", color:"orange"}}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : filteredData?.data && (
        <div className="card mb-3 col-lg-6 col-12">
          <img src={filteredData.data.recipe.image_url} className="card-img-top food-image" alt={filteredData.data.recipe.title} />
          <div className="card-body">
            <h5 className="card-title">{filteredData.data.recipe.title}</h5>
          
            <p className="card-text">
              <strong className="text-dark">Publisher:</strong> <a href={filteredData?.data?.recipe?.source_url} className="text-primary">{filteredData.data.recipe.publisher} </a><br/>
              Cooking time: {filteredData.data.recipe.cooking_time} minutes<br />
              <small className="text-secondary">Servings: {filteredData.data.recipe.servings}</small>
            </p>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px'}}>
              <FaHeart 
                size={24} 
                style={{cursor:'pointer'}} 
                color={isFavorite ? 'red' : 'black'} 
                onClick={handleFavoriteToggle}
                title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              />
              {showAdded && <span className="text-success">{isFavorite ? 'Added to favorites' : 'Removed from favorites'}</span>}
            </div>
            <ShareFeature id={id}/>
            <h6 className="card-title">Ingredients</h6>
            {filteredData.data.recipe.ingredients.map((ingredient, index) => (
              <div className="d-flex" key={index}>
                <div className="index"><p>{index + 1}</p></div>
                <p className="card-text pt-2">{ingredient.quantity + " " + ingredient.unit + " " + ingredient.description}</p>
              </div>
            ))}
                        <DownloadIngredients title={filteredData.data.recipe.title} ingredients={filteredData.data.recipe.ingredients}/>
            <p className="card-text">
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailsPage
