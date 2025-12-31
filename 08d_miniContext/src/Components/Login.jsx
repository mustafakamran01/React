import React, { useContext, useState } from 'react'
import { userContext } from '../Contexts/UserContext'

function Login() {

    const {setUser} = useContext(userContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>

            <input type="text"
            value={username}
            onChange={onChangeUsername}
             />

            <input type="text"
            value={password}
            onChange={onChangePassword}
             />

             <button onClick={handleSubmit}>Submit</button>
        </div>        
    )
}

export default Login
