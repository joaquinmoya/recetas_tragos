import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react';

//Crear el context
export const CategoriaContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriaProvider = (props) => {

    //crear el state del context
    const[categorias, guardarCategorias] = useState([]);

    //ejecutar el llamado a la api
    useEffect(()=>{
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    },[])
    return(
        <CategoriaContext.Provider
        value={{
            categorias
        }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}
export default CategoriaProvider;