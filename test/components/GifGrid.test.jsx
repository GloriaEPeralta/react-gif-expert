import { render, screen} from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');




describe('pruebas en <GifGrid/>', () => {
    const category = 'Hola';
    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        }); 
        
        render(<GifGrid category={category} />);
        //screen.debug();
        // no se por que no aparece cargando...
        // solo probare la caregoria YA LO AGREGUE 
        expect(screen.getByText('Cargando..'));
        expect(screen.getByText(category));

    });  
    test('debe mostrar items cuando se cargan imagenes useFetchGifs', () => {       
        const images = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            },
            {
                id: '123',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            },
        ];
        useFetchGifs.mockReturnValue({
            images: images,
            isLoading: false,
        }); 
        
        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(images.length);
        
        
    });
    
 })