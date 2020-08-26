const { retornaArreglo } = require("../../base-pruebas/07-deses-arr")


describe('Prueba en deses07', () => {
    
    test('debe de retornar un string y un número', () => {
        
        // const arr = retornaArreglo();
        // expect( arr ).toEqual(['ABC',123]);

        const [letras, numeros] = retornaArreglo();
        /* 
            expect(letras).toBe('ABC');
            expect(numeros).toBe(123);
         */

         expect( typeof letras).toBe('string');
         expect( typeof numeros).toBe('number');
         


    })
    
})


