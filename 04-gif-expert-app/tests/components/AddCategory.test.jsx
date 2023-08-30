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

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "Saitama";
        const onNewCategory = jest.fn(); //Este simula la función que se está enviando
        //  TODO : ????
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        //  capturamos el input y el form
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //  en el input simulamos el ingreso de datos, y simulamos el evento onsubmit
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form ); //en el componente, en la función onsubmit, podemos poner un console log para comprobar que la prueba si se está ejecutando
        
        //Aqui, el input tiene que setearse a una cadena vacia
        expect( input.value ).toBe('');

        //Aqui esperamos que la función sea llamada, al menos una vez y con el valor de inputValue.
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('no debe de llamar el onNewCategory si el input está vacío', () => {
        // Este simula la función que se está enviando
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        // capturamos el form y simulamos su envio 
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        // Si llamamos a la función tiene que ser llamado 0 veces, o con la otra función de abajo se agrega
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
});