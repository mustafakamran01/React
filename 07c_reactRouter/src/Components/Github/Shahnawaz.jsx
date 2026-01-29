import { useLoaderData } from "react-router"


function Shahnawaz() {

    const info = useLoaderData(githubLoaderShah)

    return (
        <div className="w-full flex justify-center mt-1 mb-10">
            <div className="bg-gray-700 text-white text-3xl p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="mb-4">Followers: {info["followers"]}</h2>
                <img 
                    src={info["avatar_url"]} 
                    alt="Profile"
                    width={300}
                    className="rounded-lg"
                />
            </div>
        </div>
    )
}

export default Shahnawaz

export const githubLoaderShah = async() => {
    const response = await fetch('https://api.github.com/users/Shahnawazahm')
    return response.json();
}

// Creating github component for shahnawaz 


