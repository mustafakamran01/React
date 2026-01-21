import { useLoaderData } from "react-router"


function Mobashshir() {

    const info = useLoaderData(githubInfoLoaderMobi)

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

export default Mobashshir

export const githubInfoLoaderMobi = async() => {
    const response = await fetch('https://api.github.com/users/Mobashshirhasan')
    return response.json()
}

// Creating Github component for mobi

