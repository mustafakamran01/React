import React from 'react'
import { useLoaderData } from 'react-router'

function Mustafa() {

    const data = useLoaderData()

    return (
        <div className='bg-amber-900 text-white text-3xl p-4'>
        <h2 className='mb-3'>Followers: {data["followers"]} </h2>
        <img src={data["avatar_url"]} alt="View Image" width={300} />
        </div>
    )
}

export default Mustafa

export const githubInfoLoaderMust = async() => {
    const response = await fetch('https://api.github.com/users/mustafakamran01')
    return response.json()
}

// Creating component for particular user(Mustafa)