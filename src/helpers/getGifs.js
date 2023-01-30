export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=LBFG8gLgFIs66NpuEEsB9oLRvGhg9XLD&q=${ category }&limit=10`;
    const resp = await fetch( url );  //La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
    const { data } = await resp.json();

    const gifs = data.map( ( img ) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }  
    ))

    return gifs;
}