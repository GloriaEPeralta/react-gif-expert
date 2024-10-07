import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {
    test('Debe de retornar un arreglo de gifts', async() => {
        const gifs = await getGifs('Hola');
        expect(gifs.length).toBeGreaterThan(0); // Verifica que el arreglo tenga al menos un elemento

        //expect(gifs[0]).toEqual(expect.any(Array)); // Verifica que sea un arreglo
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });  
        
        
    });

    // test('Debe de traer 10 elementos', async() => {
    //     const gifs = await getGifs('One Punch');
    //     expect(gifs.length).toBe(10);
    // });
    // test('Debe de traer 0 elementos', async() => {
    //     const gifs = await getGifs('');
    //     expect(gifs.length).toBe(0);
    // });
    
});