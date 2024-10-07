import { render,screen } from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
    
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';

    test('Debe hacer match con el snapshot', () => {
       const {container}= render(<GifItem title={ title } url={url} />);
       expect(container).toMatchSnapshot();
    });
    test('Mostrar la imagen con el URL y el ALT indicado', () => {
       // const { getByText } = render(<GifItem title={ title } url={url} />);
       render(<GifItem title={ title } url={url} />); 
       //screen.debug();
        //expect(getByText(title)).toBeInTheDocument();
        // se puede hacer de la siguiente manera
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);   
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);


    }); 
    test('Debe de mostrar el título en el componente', () => {
        render(<GifItem title={ title } url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

}) 

