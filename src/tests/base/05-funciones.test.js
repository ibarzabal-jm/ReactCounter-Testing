import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones'


describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
       
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();


        expect(user).toEqual(userTest);

    });

    //getUsuarioActivo debe retornar un objeto

    test('getUsuario activo debe retornar un objeto', () => {

        
        const nombre = 'Juan';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:'ABC567',
            username: nombre,

        })

    })
    



})
