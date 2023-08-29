import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";   

describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        //Renderizamos el componente y le pasamos el Prop Type 
        //correspondiente.
        render( <AddCategory onNewCategory={ () => {} } /> );
        //Tenemos que guardar el componente, como solo tenemos un input
        //el input se toma como textbox
        const input = screen.getByRole('textbox');
        //el fireEvent me permite simular los eventos que haría un usuario
        //en este caso estamos simulando un input(.input), por lo que,
        //aceptamos dos parámetros, el primero es el componente,
        //el segundo es la acción a simular o que estaría recibiendo
        //en este caso es un target.value = "Saitama".
        fireEvent.input( input, { target: { value: 'Saitama' } } );

        //screen.debug();
        expect( input.value ).toBe('Saitama');
    });
});