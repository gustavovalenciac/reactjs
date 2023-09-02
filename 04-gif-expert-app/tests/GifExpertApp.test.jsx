import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    const newCategory = 'Saitama';
    //setup function; para no repetir el setup de las pruebas repetidas veces
    const setup = () => {
        render( <GifExpertApp/> );  //Renderizamos el componente
        const input = screen.getByRole("textbox");  //agarramos nuestro input
        const form = screen.getByRole("form");      //agarramos nuestro formulario

        return {
            input,
            form,
        }
    }

    test('debe de tener un h1 GifExpertApp', () => {
        setup();
        expect(screen.getByRole("heading", { level: 1 }).innerHTML ).toBe("GifExpertApp");
    });

    test('debe de guardar en el estado las nuevas categorias ', () => {
        
        const { input, form } = setup();

        //Ahora se disparan los eventos para agregar 3 categorías nuevas
        fireEvent.input(input, { target: { value: newCategory } })
        fireEvent.submit(form);     //agrega Saitama

        fireEvent.input(input, { target: { value: newCategory + '2' } })
        fireEvent.submit(form);     //agrega Saitama2

        fireEvent.input(input, { target: { value: newCategory + '3' } })
        fireEvent.submit(form);     //agrega Saitama3

        //Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(3);

        //screen.debug();

    });

    test('Debe agregar la categoría si no está repetida', () => {
        const { input, form } = setup();

        fireEvent.change( input, { target: { value: "Cualquier texto" } } )
        fireEvent.submit(form);

        expect( screen.getAllByRole("heading", { level: 3 }).toHaveLength(2) );
    });

    test('No debe agregar la categoría si está repetida', () => {
        const { input, form } = setup();
        fireEvent.change( input, { target: { value: newCategory } });
        fireEvent.submit(form);

        expect( screen.getAllByRole("heading", { level: 3 }).toHaveLength(1) );
    });

    //No debe agregar una categoría si ya existe
    test('No debe agregar una categoría repetida', () => {
        render( <GifExpertApp /> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //se disparan los eventos para agregar una categoría
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);

        //Intento agregar la misma categoría
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form);     //intento agregar Saitama nuevamente

        //espero que no agregue la misma categoría y solo esté agregada la primera vez
        expect( screen.getAllByRole('heading', { level: 3 }).length ).toBe(1);


    });
});