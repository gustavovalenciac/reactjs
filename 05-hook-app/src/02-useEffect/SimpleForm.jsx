import { useState, useEffect } from "react"

export const SimpleForm = () => {

    //  Valores por defecto
    const [ formState, setformState ] = useState({
        username: 'strider',
        email: 'gustavo@gmail.com'
    });

    //  desestructuramos los valores por defecto
    const { username, email } = formState;

    //  cuando se haga un cambio, agarramos el input y lo desestructuramos
    const onInputChange = ({ target }) => {
        //  name: username ; value: username(strider2)
        //  name: email : value: email(gustavo@gmail.com)
        const { name, value } = target;
        //Seteamos el estado, todo lo que está en el formState, MAS tipo de name y su valor que estamos escribiendo.
        setformState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect(() => {
        console.log('useEffect called!');
    }, [])

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value = { username }
                onChange = { onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="gustavo@gmail.com"
                name="email"
                value = { email }
                onChange = { onInputChange }
            />

        </>
    )
}
