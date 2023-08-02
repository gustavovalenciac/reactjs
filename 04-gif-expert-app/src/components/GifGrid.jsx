import { useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([]); 

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
    }

    useEffect( () => {
        getImages();
    }, [])
    
    return (
        <>
            <h1>{ category }</h1>
            <ol>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ol>

        </>
    )
} 