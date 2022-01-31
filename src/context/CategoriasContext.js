import axios from "axios";
import { createContext, useState, useEffect } from "react";

//crear el context
export const CategoriasContext = createContext();

// provider donde están las funciones y state
const CategoriasProvider = (props) => {

    //crear el state del context
    const [categorias, guardarCategorias] = useState([])

    //ejecutar llamado a la API
    useEffect(()=>{
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            const categorias = await axios.get(url)
            guardarCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    }, [])

    return(
        <CategoriasContext.Provider value={{ categorias }}>
            {props.children}
        </CategoriasContext.Provider>
        )
}

export default CategoriasProvider;