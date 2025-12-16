import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = () => {
        setUser({username, password})
    }

    return (
        <>
        <h2>Login</h2>

        <input type="text" 
        value={username}
        onChange={ (e) => setUsername(e.target.value)}
        placeholder='username' />

        <br />

        <input type="text" 
        value={password}
        onChange={ (e) => setPassword(e.target.value)}
        placeholder='password' />

        <br />

        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login
