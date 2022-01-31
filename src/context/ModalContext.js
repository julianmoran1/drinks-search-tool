import { createContext, useEffect, useState } from "react";
import axios from "axios";

//crear el context
export const ModalContext = createContext();

export default function ModalProvider(props) {
  // state del provider
  const [idReceta, setRecipeId] = useState(null);
  const [recipeInformation, setRecipe] = useState({});


  //consultar la api una vez que tenemos la receta

  useEffect(()=>{
      const obtenerReceta = async () => {
          if (!idReceta){ return }
          
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const resultado = await axios.get(url);
        setRecipe(resultado.data.drinks[0])
      };
      obtenerReceta()
  }, [idReceta])

  return (
    <ModalContext.Provider value={{ recipeInformation, setRecipe, setRecipeId }}>
      {props.children}
    </ModalContext.Provider>
  );
}
