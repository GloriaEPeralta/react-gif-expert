import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en hook useFetchGifs', () => { 
    test('Debe regresar el estado inicial', () => { 
        useFetchGifs
         
        const {result}=renderHook(() => useFetchGifs('Hola')); 
        const {images, isLoading} = result.current;

        //console.log(result.current);   
        //expect(images).toEqual([]);
        expect(images.length).toBe(0);

        expect(isLoading).toBeTruthy();


    
    });

    test('Debe regresar un arreglo de imagenes y el loading en false', async () => { 
        
        const {result}=renderHook(() => useFetchGifs('Hola')); 
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)   
        );
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });     



});
