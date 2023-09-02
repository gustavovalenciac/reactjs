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

jest.mock('../../src/hooks/useFetchGifs'); //al hacer un mock, debemos tener la implementación ya puesta al hacer el test


describe('Pruebas en  <GifGrid />', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {
        
        //  simulamos el hook personalizado, y lo seteamos con los valores que debería contener
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true //para cuando no esperamos imagenes si estuviera en false, mostraría error el getByText('Cargando...') ya que no se está cumpliendo
        })

        render( <GifGrid category={ category }/> ); //Renderizamos el componente con su prop
        //  Si todo está como debería:
        //  1: Debería mostrar el texto 'Cargando...' si isLoading es true
        //  2: Debería mostrar lo del texto de la variable 'category'
        expect( screen.getByText('Cargando...') );  
        expect( screen.getByText( category ) );
        //screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        //Data ficticia , Data fija
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        //  simulamos el hook personalizado, y lo seteamos con los valores que debería contener
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false //en false es cuando ya no estamos esperando un loading y ya tenemos imagenes
        })

        render( <GifGrid category={ category }/> )
        //Por ejemplo, testeamos que sean 2 que recibimos
        expect( screen.getAllByRole('img').length ).toBe(2);

        //screen.debug();
    });
});