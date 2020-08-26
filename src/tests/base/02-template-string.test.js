import '@testing-library/jest-dom';
import{getSaludo} from '../../base-pruebas/02-template-string';


describe('Pruebas en 02-template-string.js',()=>{

    test('getSaludo debe retornar hola Juan', () => {
        
        const nombre = 'Juan Manuel';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre );
    })
    
    //getSaludo debe recibir Hola Carlos si no hay argumento.

    test('retornar cuando no hay argumento Hola carlos', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Carlos');

        
    })
    

})

