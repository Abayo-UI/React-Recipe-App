import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){
    const [ searchParam, setSearchParam ] = useState("chicken");
    const [ loading, setLoading ] = useState(false);
    const [ recipeList, setRecipeList ] = useState([]);
    const [ filteredData, setFilteredData ] = useState(null);
    const [ favoriteList, setFavoritelist ] = useState(() => {
      const stored = localStorage.getItem('favoriteList');
      return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
    }, [favoriteList]);

    async function handleSubmit(event){
        if(event) event.preventDefault();
        setLoading(true)
        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await response.json();
            console.log(data)

            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes);
                setLoading(false);
            }

        } catch(e){
            console.log("error in your async hanldeSubmit function" + " " + e.message);
            setSearchParam("");
            setLoading(false);
        }
    }


    return(
        <GlobalContext.Provider value={{searchParam, setSearchParam, handleSubmit, loading, recipeList, filteredData, setFilteredData, favoriteList, setFavoritelist}}>
            { children }
        </GlobalContext.Provider>
    )
}