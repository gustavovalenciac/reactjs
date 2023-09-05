import { useState } from "react"

export const SimpleForm = () => {

    const [ formState, setformState ] = useState({
        username: 'strider',
        email: 'gustavo@gmail.com'
    });

    const { username, email } = formState;

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
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="gustavo@gmail.com"
                name="email"
                value = { email }
            />

        </>
    )
}
