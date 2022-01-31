import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

export default function ListaRecetas() {

    //extraer las recetas
    const { recetas } = useContext(RecetasContext)
    //console.log(recetas)

  return <div className="row mt-5">
    {recetas.map((receta)=><Receta key={receta.idDrink} receta={receta} />)}
  </div>;
}
