import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect( () => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then( (res) => res.json())
    //     .then( (res) => setData(res))
    // }, [])

    return (
        <div 
            className='bg-gray-600 text-white text-3xl p-4'>Github Followers: {data["followers"]}
            <img src={data["avatar_url"]} alt="View Image" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}