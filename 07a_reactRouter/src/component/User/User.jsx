import React from 'react'
import { useParams } from 'react-router'

function User() {

    const users = {
        1: "Mustafa Kamran",
        2: "Alshifa Perween",
        3: "Farhan Ahmad",
        4: "Mobashshir Hasan"
    }

    const userid = useParams()

    return (
        <div>My User name: {users[userid.userid] ? users[userid.userid] : "No input found"} </div>
    )
}

export default User

// Creating component for User
