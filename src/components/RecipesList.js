import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

export default function RecipesList() {

    //extraer las recetas
    const { recipes } = useContext(RecipesContext)
    //console.log(recetas)

  return <div className="row mt-5">
    {recipes.map((recipe)=><Recipe key={recipe.idDrink} recipe={recipe} />)}
  </div>;
}
