import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );   
        setImages( newImages );
        setIsLoading( false );
  }

  useEffect(() => {  // USEEFFECT SE UTILIZA PARA QUE EL COMPONENETE SE RENDERICE UNA SOLA VEZ, para que no se dispare la peticion cada vez que resolvemos.
    getImages();
  }, []);
  
  //getGifs( category );
  

    return {
        images, //EMA script 6: cuando una porpiedad apunta a el nombre de una var con el mismo nombre {images: images} puede qdar solo {images}
        isLoading
    }

}
