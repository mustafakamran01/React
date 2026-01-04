
import React, { useId } from 'react'
import { useParams } from 'react-router'

function User() {

    const {userID} = useParams()

    const info = {
        1: ["Mustafa Kamran", "25", "Patna"],
        2: ["Alshifa Perween", "23", "Asansol"],
        3: ["Asad Meraj", "8", "Patna"],
        4: ["Saad Meraj", "4", "Patna"],
        5: ["Maaz Meraj", "2", "Patna"]
    }    

    if (info[userID] == null) {
        return <h2>No record Found</h2>
    } else {
        return (
            <div class="flex flex-col items-start gap-2 p-6 bg-gray-200 rounded-lg">

                <h1 className='text-3xl underline mb-3 text-red-600'>PROFILE</h1>
                <p class="text-gray-700 text-lg">
                    <span class="font-semibold">Name:</span> {info[userID][0]}
                </p>

                <p class="text-gray-700 text-lg">
                    <span class="font-semibold">Age:</span> {info[userID][1]}
                </p>

                <p class="text-gray-700 text-lg">
                    <span class="font-semibold">Place:</span> {info[userID][2]}
                </p>

            </div>
        )
    }
}

export default User

// Creating user component  
