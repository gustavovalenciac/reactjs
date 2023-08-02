import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = ( newCategory  ) => {
        //categories.push( newCategory );
        if( categories.includes( newCategory ) ) return; //Para no repetir
        setCategories( [ newCategory , ...categories] )  //A lo que ya teniamos, agregale una nueva categoría.
    }

    return (
        <>
            <h1>GifExpertApp</h1>
        
            <AddCategory 
                onNewCategory = { onAddCategory }
            /> 

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                )) 
            }
        </>
    )
}