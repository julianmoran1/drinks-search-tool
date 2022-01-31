import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext()

const RecipesProvider = (props) => {

    const [recetas, guardarRecetas] = useState([])

    const [busqueda, buscarRecetas] = useState({
        nombre:"",
        categoria:""
    })

    const {nombre, categoria} = busqueda

    const [consultar, guardarConsultar] = useState(false)

    useEffect(()=>{
        if (consultar){
            const obtenerRecetas = async ()=>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const resultado = await axios.get(url)
                guardarRecetas(resultado.data.drinks)
                //console.log(resultado.data.drinks)
            }
            obtenerRecetas()
        }
    }, [busqueda])


    return(
        <RecipesContext.Provider value={{recetas, buscarRecetas, guardarConsultar}}>
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;

