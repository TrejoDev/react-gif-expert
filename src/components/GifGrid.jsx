import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ( { category } ) => {

  const { images, isLoading } = useFetchGifs( category )
  
  return (
    <>
        <h3> {category} </h3>
        { isLoading && ( <h2>Cargando...</h2> ) } 
        <div className="card-grid" >
            {/* images.map... */}
            {images.map( ( image ) => (
                <GifItem 
                 key={ image.id } 
                 {... image} //se puede usar el operador spread para esparcir las properties del objeto. Tixaaaaaa
                 />          
              )
             )}
            
        </div>
    </>
  )
}
