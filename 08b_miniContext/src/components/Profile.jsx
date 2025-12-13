import React, { useContext } from 'react'
import UserContext from '../contexts/UserContextProvider'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div>

    return <h2>Welcome {user.username} </h2>
    
}

export default Profile
