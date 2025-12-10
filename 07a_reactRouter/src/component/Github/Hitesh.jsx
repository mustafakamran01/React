import React from 'react'
import { useLoaderData } from 'react-router'

function Hitesh() {

    const data = useLoaderData()

    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>
        <h2>My followers: {data["followers"]} </h2>
        <img src={data["avatar_url"]} alt="View Image" width={300} />
        </div>
    )
}

export default Hitesh

export const githubInfoLoaderHit = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}