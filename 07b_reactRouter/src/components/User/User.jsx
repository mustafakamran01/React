import React from 'react'
import { useParams } from 'react-router'

const users = {
    1: ["Mustafa Kamran", 25, "New Delhi"],
    2: ["Alshifa Perween", 23, "Asansol"],
    3: ["Farhan Ahmad", 26, "Kolkata"],
    4: ["Shahnawaz Ahmad", 25, "Patna"],
    5: ["Mobashshir Hasan", 36, "Bangalore"]
}


function User() {

    const {userid} = useParams()

    return (

        <div class="flex flex-col items-start gap-2 p-6 bg-gray-200 rounded-lg">

            <h1 className='text-3xl underline mb-3 text-red-600'>PROFILE</h1>
            <p class="text-gray-700 text-lg">
                <span class="font-semibold">Name:</span> {users[userid][0]}
            </p>

            <p class="text-gray-700 text-lg">
                <span class="font-semibold">Age:</span> {users[userid][1]}
            </p>

            <p class="text-gray-700 text-lg">
                <span class="font-semibold">Place:</span> {users[userid][2]}
            </p>

        </div> 
    )
}

export default User

// creating User component