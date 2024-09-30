import React from 'react';

// rafc para que cree el componente automaticamente
export const GifItem = ({ title, url,id }) => {
    
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p> {title} </p>    
    </div>
  )
}
