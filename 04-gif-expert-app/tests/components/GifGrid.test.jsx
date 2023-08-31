import { render, screen, fireEvent } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid"; 
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//  MOCK FUNCTIONS
//  La funciones Mock también son conocidos como "espias", porque te permiten espiar el comportamiento de una función que es llamada indirectamente por algún
//  otro código, en vez de solamente testear la salida. Puedes crear una función Mock con jest.fn(). Si ninguna implementación está dada, la función mock regresará
//  un undefined cuando se invoque.

//  So propósito es remplazar algo que no controlamos con algo con lo que si podamos, por lo que,
//  es importante que lo que remplacemos tenga todas las características que necesitemos. 

//  Cuando hablamos acerca de Modelar(Mocking) en Jest, usualmente estamos hablando de reemplazar dependencias con
//  la función Mock.

// Hay 3 tipos principales de modulos y funciones de mocking en Jest:
//  jest.fn:    Mock a function
//  jest.mock:  Mock a module
//  jest.spyOn: Spy or mock a function

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en  <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true //si estuviera en false, mostraría error
        })

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
        screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        render( <GifGrid category={ category }/> )
    });
});