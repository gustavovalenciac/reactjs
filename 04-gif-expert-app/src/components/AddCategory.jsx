import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = ( { target } ) => {
        setInputValue( target.value );
    }
    const onSubmit = ( event ) => {
        event.preventDefault();         //PARA QUE NO SE RECARGUE EL NAVEGADOR

        const valor = inputValue.trim();
        if( valor.length <= 1 ) return;
        //setCategories( categories => [inputValue, ...categories] )
        onNewCategory( valor )
        setInputValue('');
    }

    return (
        <form onSubmit = { onSubmit } aria-label="form">
            <input
                type='text'
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange = { handleChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}