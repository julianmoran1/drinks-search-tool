import axios from "axios";
import { createContext, useState, useEffect } from "react";

//crear el context
export const CategoriesContext = createContext();

// provider donde están las funciones y state
const CategoriesProvider = (props) => {

    //crear el state del context
    const [categories, setCategories] = useState([])

    //ejecutar llamado a la API
    useEffect(()=>{
        const getCategories = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            const categories = await axios.get(url)
            setCategories(categories.data.drinks)
        }
        getCategories()
    }, [])

    return(
        <CategoriesContext.Provider value={{ categories }}>
            {props.children}
        </CategoriesContext.Provider>
        )
}

export default CategoriesProvider;