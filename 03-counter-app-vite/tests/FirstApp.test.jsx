import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    /*test('debe de hacer match con el snapshot', () => {
        const title = 'Hola, soy Goku';
        const { container } = render(<FirstApp title={title} subTitle='This is my subtitle'/>)
        
        expect( container ).toMatchSnapshot();
    })*/

    test('debe de mostrar el título en un h1', () => {
        
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} subTitle='This is my subtitle'/>)
        expect( getByText( title ) ).toBeTruthy();

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getByText } = render(
            <FirstApp title={title} subTitle={ subTitle }/>
        );
        expect( getByText( subTitle ) ).toBeTruthy();

        /*
        Si queremos que fueran varios elementos
        const { getAllByText } = render(
            <FirstApp title={title} subTitle={ subTitle }/>
        );
        expect( getAllByText( subTitle ).length ).toBe(3);*/

    });

})