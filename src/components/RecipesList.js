import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

export default function RecipesList() {

    //extraer las recetas
    const { recetas } = useContext(RecipesContext)
    //console.log(recetas)

  return <div className="row mt-5">
    {recetas.map((receta)=><Recipe key={receta.idDrink} receta={receta} />)}
  </div>;
}
