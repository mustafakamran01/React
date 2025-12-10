import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()

    return (
        <h2>My github followers: {data["followers"]} </h2>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json();
}

