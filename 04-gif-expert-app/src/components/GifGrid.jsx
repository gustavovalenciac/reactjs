import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h1>{ category }</h1>
            <div className="card-grid">
                {
                    images.map(  ( image )  => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>

        </>
    )
} 