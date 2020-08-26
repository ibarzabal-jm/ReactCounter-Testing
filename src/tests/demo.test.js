

describe('Pruebas en el archivo demo.test.js', () =>{
    
    test('debe ser iguales los string', () => {
    
        // 1. inicializacion
        const mensaje = 'Hola mundo';
        
        // 2. Estímulo
        const mensaje2 = `Hola mundo`;
    
        // 3. Observar el Comportamiento
        expect( mensaje ).toBe( mensaje2 );
    
    })


});


