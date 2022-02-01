import axios from "axios";
import { createContext, useState, useEffect } from "react";

//creates the context
export const CategoriesContext = createContext();

// provides the functions and state
const CategoriesProvider = (props) => {

    //creates the state of the context
    const [categories, setCategories] = useState([])

    // API call
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