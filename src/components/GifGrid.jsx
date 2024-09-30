
import { GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => 
{
  const {images, isLoading} = useFetchGifs(category);

  
      
  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {
          images.map(( image) => 
          (
           <GifItem 
            key={image.id}
            {...image}
            />
           
          ))
        } 
      </div> 
    </>
  );
}    

// Asi estamos poniendo las imagenes en el estado local
// y las mostramos en el componente
//<img src={img.url} alt={img.title} />