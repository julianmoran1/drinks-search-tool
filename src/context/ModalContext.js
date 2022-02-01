import { createContext, useEffect, useState } from "react";
import axios from "axios";

//creates the context
export const ModalContext = createContext();

export default function ModalProvider(props) {
  // state´s  provider
  const [recipeId, setRecipeId] = useState(null);
  const [recipeInformation, setRecipe] = useState({});


  //calls api once we have the recipe
  useEffect(()=>{
      const getRecipe = async () => {
          if (!recipeId){ return }
          
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
        const result = await axios.get(url);
        setRecipe(result.data.drinks[0])
      };
      getRecipe()
  }, [recipeId])

  return (
    <ModalContext.Provider value={{ recipeInformation, setRecipe, setRecipeId }}>
      {props.children}
    </ModalContext.Provider>
  );
}
