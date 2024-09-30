import { useState } from 'react';
import { AddCategory,GifGrid } from './components';



export const GifExpertApp = () => {
    
    // se tiene un espacio en memoria para guardar las categorias
    const [categories, setCategories] = useState(['Hola']); 
    
    const onAddCategory = (newCategory) => { 
        //console.log(newCategory);
        //categories.push(newCategory);   
        if (categories.includes(newCategory)) {
            return;
        }   
        setCategories([newCategory,...categories]); 
    }   



  return (
    <>    
        
        <h1>GifExpertApp</h1>
        
       
        <AddCategory 
           // setCategories={setCategories} 
           onNewCategory={(value)=>onAddCategory(value)}

        /> 
    
        {
            categories.map((category) => 
                (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ) 
            )
        }
             
           
    </>

  )
}


// 6MuY6XgegygGujErFhC5yKkS5jyXdh1r
