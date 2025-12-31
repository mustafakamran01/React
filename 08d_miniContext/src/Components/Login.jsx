import React, { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
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
        </div>        
    )
}

export default Login
