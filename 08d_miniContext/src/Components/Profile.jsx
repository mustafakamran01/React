import React, { useContext } from 'react'
import { userContext } from '../Contexts/UserContext'

function Profile() {

    const {user} = useContext(userContext)

    if (user == null) return <div>Please login</div>

    return <div>Welcome {user.username} </div>
    
}

export default Profile
