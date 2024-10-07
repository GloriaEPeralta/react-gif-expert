import React from 'react';
import PropTypes from 'prop-types';

// rafc para que cree el componente automaticamente
export const GifItem = ({ title, url,id }) => {
    
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p> {title} </p>    
    </div>
  )
}

GifItem.propTypes = { 
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
   
} 



// FirstApp.propTypes = {
//   title: Proptypes.string.isRequired,
//   subtitle: Proptypes.string.isRequired  
// }