import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Recipe from "./Recipe";

export default function ListaRecetas() {

    //extraer las recetas
    const { recetas } = useContext(RecetasContext)
    //console.log(recetas)

  return <div className="row mt-5">
    {recetas.map((receta)=><Recipe key={receta.idDrink} receta={receta} />)}
  </div>;
}
