import React from 'react'
import { useParams } from 'react-router'

function User() {

    const {username} = useParams()

    return (
        <div>My User name: {username} </div>
    )
}

export default User
