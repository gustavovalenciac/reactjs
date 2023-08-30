import { render, screen, fireEvent } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid"; 
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Hay 3 tipos principales de modulos y funciones de mocking en Jest:
//  jest.fn:    Mock a function
//  jest.mock:  Mock a module
//  jest.spyOn: Spy or mock a function

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en  <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        
        /*useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true //si estuviera en false, mostraría error
        })*/

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
        screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        render( <GifGrid category={ category }/> )
    });
});