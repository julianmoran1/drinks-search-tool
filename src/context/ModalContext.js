import { createContext, useEffect, useState } from "react";
import axios from "axios";

//crear el context
export const ModalContext = createContext();

export default function ModalProvider(props) {
  // state del provider
  const [idReceta, guardarIdReceta] = useState(null);
  const [recipeInformation, guardarReceta] = useState({});


  //consultar la api una vez que tenemos la receta

  useEffect(()=>{
      const obtenerReceta = async () => {
          if (!idReceta){ return }
          
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const resultado = await axios.get(url);
        guardarReceta(resultado.data.drinks[0])
      };
      obtenerReceta()
  }, [idReceta])

  return (
    <ModalContext.Provider value={{ recipeInformation, guardarReceta, guardarIdReceta }}>
      {props.children}
    </ModalContext.Provider>
  );
}
