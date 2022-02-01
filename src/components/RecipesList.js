import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Recipe from "./Recipe";

export default function RecipesList() {

    //extracts the recipes
    const { recipes } = useContext(RecipesContext)

  return <div className="row mt-5">
    {recipes.map((recipe)=><Recipe key={recipe.idDrink} recipe={recipe} />)}
  </div>;
}
