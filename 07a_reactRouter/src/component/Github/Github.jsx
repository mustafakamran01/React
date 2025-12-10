import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()

    return (
        <div className='bg-gray-600 text-white text-3xl p-4'>
        <h2>My followers: {data["followers"]} </h2>
        <img src={data["avatar_url"]} alt="View Image" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/mustafakamran01')
    return res.json();
}

