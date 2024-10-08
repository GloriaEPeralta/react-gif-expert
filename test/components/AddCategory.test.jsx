import { fireEvent, render,screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/AddCategory"; 

describe('Pruebas en <AddCategory />', () => { 

    test('Debe cambiar el valor de la caja de texto ', () => {  
        // sujeto de pruebas
        render(<AddCategory onNewCategory={()=>{}} />);
        screen.debug();
        const input = screen.getByRole('textbox');
        //se pone textbox aunque sea input
        fireEvent.input(input, {target:{value:'Hola mundo'}});
        expect(input.value).toBe('Hola mundo');
        //screen.debug();
      
    }); 

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {  
       
        const inputValue = 'Hola mundo';
        const onNewCategory = jest.fn();

        //TODO: ???

        // sujeto de pruebas
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target:{ value:inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); 
       // screen.debug();
        //
        //expect(form).toBeInTheDocument();
    });
    test('No debe de llamar onNewCategory si el input esta vacio', () => {  
        const onNewCategory = jest.fn();
        // sujeto de pruebas
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

})
