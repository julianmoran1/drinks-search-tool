import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext()

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([])

    const [search, setSearch] = useState({
        ingredient:"",
        category:""
    })

    const {ingredient, category} = search

    const [query, setQuery] = useState(false)

    useEffect(()=>{
        if (query){
            const getRecipes = async ()=>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
                const result = await axios.get(url)
                setRecipes(result.data.drinks)
            }
            getRecipes()
        }
    }, [search])


    return(
        <RecipesContext.Provider value={{recipes, setSearch, setQuery}}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;

