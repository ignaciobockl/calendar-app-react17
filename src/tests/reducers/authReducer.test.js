import { authReducer } from "../../reducers/authReducer";

import { types } from "../../types/types";


let initialState = {
    checking: true
}

let action = {};


describe('Pruebas en el authReducer.js', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer( initialState, action );
        
        expect( state ).toEqual( initialState );

    });

    test('debe de hacer el login de usuario correctamente', () => {

        action = {
            type: types.authLogin,
            payload: {
                uid: '8332',
                name: 'Esmeralda'
            }
        }

        const state = authReducer( initialState, action );
        
        expect( state ).toEqual({
            checking: false,
            uid: '8332',
            name: 'Esmeralda'
        });

    });

    test('debe de hacer el logout correctamente', () => { 
        
        initialState = {
            checking: false,
            uid: '8332',
            name: 'Esmeralda'
        };

        action = { type: types.authLogout };

        const state = authReducer( initialState, action );

        expect( state ).toEqual({ checking: false });

    });

});